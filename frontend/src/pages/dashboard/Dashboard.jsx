// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Graphs from './components/Graphs';
import { useNavigate } from 'react-router-dom';
import LessonLists from '../lessons/LessonLists';
import Loading from '../../components/common/Loading';
import { getUserLesonData } from '../../hooks/getUserStats';
import useFetchSettings from '../../hooks/useFetchSettings';
import FirstLoginModal from './components/FirstLoginModal';



const Dashboard = () => {
  const [userTypingData, setUserTypingData] = useState(null);
  const { settings: userSettingsData, error, fetchSettings } = useFetchSettings();
  const [showFirstLoginModal, setShowFirstLoginModal] = useState(false);
  const [showSetupModal, setShowSetupModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Try to fetch settings as an auth check
        await fetchSettings();
        setAuthChecked(true);
      } catch (error) {
        console.error('Auth check failed:', error);
        if (error.response && error.response.status === 401) {
          // Redirect to login if unauthorized
          navigate('/login');
        }
      }
    };
    
    checkAuth();
  }, [navigate]);


  useEffect(() => {
    if (!authChecked) return;
    
    const fetchTypingData = async () => {
      setLoading(true);
      try {
        const data = await getUserLesonData();
        setUserTypingData(data);
        
        if (!data || data.length === 0) {
          setShowFirstLoginModal(true);
        }
      } catch (error) {
        console.error('Error fetching typing data:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchTypingData();
  }, [authChecked]);

  if (error) {
    console.error('Error fetching settings:', error);
    // return <div>Error: {error.message}</div>;
  }



  if (loading || !authChecked || !userSettingsData) {
    return <Loading />;
  }


  return (
    <div>
      <Graphs userTypingData={userTypingData} userSettingsData={userSettingsData} />
      <div className="lesson-list-div">
        <LessonLists userTypingData={userTypingData} />
      </div>

      {/* FirstLoginMessage Modal */}
      <FirstLoginModal showFirstLoginModal={showFirstLoginModal} setShowFirstLoginModal={setShowFirstLoginModal} showSetupModal={showSetupModal} setShowSetupModal={setShowSetupModal} />
    </div>
  );
};

export default Dashboard;
