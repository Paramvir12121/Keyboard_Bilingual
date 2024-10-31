// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Graphs from './components/Graphs';
import LessonLists from '../lessons/LessonLists';
import Loading from '../../components/common/Loading';
import FirstLoginMessage from '../../components/firstLogin/FirstLoginMessage';
import SetupPage from '../introPages/SetupPage';
import { getUserLesonData } from '../../hooks/getUserStats';
import useFetchSettings from '../../hooks/useFetchSettings';
import FirstLoginModal from './components/FirstLoginModal';



const Dashboard = () => {
  const [userTypingData, setUserTypingData] = useState(null);
  const { settings: userSettingsData, error } = useFetchSettings();
  const [showFirstLoginModal, setShowFirstLoginModal] = useState(false);
  const [showSetupModal, setShowSetupModal] = useState(false);

  useEffect(() => {
    const fetchTypingData = async () => {
      try {
        const data = await getUserLesonData();
        setUserTypingData(data);

        // Show the FirstLoginMessage modal only if userTypingData is empty
        if (!data || data.length === 0) {
          setShowFirstLoginModal(true);
        } else {
          setShowFirstLoginModal(false);
        }
      } catch (error) {
        console.error('Error fetching typing data:', error);
      }
    };
    fetchTypingData();
  }, []);

  if (error) {
    return <div>Error fetching settings: {error.message}</div>;
  }

  if (!userSettingsData || userTypingData === null) {
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
