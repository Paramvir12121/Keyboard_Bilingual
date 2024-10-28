import React, { useEffect, useState } from 'react';
import Graphs from './components/Graphs';
import LessonLists from '../lessons/LessonLists';
import Loading from '../../components/common/Loading';
import { getUserLesonData } from '../../hooks/getUserStats';
import useFetchSettings from '../../hooks/useFetchSettings';

const Dashboard = () => {
  const [userTypingData, setUserTypingData] = useState(null);
  const { settings: userSettingsData, error } = useFetchSettings();

  useEffect(() => {
    const fetchTypingData = async () => {
      try {
        const data = await getUserLesonData();
        setUserTypingData(data);
      } catch (error) {
        console.error("Error fetching typing data:", error);
      }
    };
    fetchTypingData();
  }, []);

  if (error) {
    return <div>Error fetching settings: {error.message}</div>;
  }

  if (!userSettingsData || !userTypingData) {
    return <Loading />;
  }

  return (
    <div>
      <Graphs userTypingData={userTypingData} userSettingsData={userSettingsData} />
      <div className='lesson-list-div'>
        <LessonLists userTypingData={userTypingData} />
      </div>
    </div>
  );
};

export default Dashboard;
