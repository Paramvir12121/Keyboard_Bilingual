import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cookie from 'js-cookie';
import Graphs from './components/Graphs';
import Goal from '../../components/common/Goal';
import LessonLists from '../lessons/LessonLists';
import ROUTES from '../../Routes';  // Import the routes
import Loading from '../../components/common/Loading';
import StripeHostedPages from '../stripe/StripeHostedPages';
import { getUserLesonData } from '../../hooks/getUserStats';
import useFetchSettings from '../../hooks/useFetchSettings';



const Dashboard = () => {
  const [userTypingData, setUserTypingData] = useState(null);
  const { settings: userSettingsData, error } = useFetchSettings(); // Access settings directly

  useEffect(() => {
    const fetchTypingData = async () => {
      try {
        const data = await getUserLesonData();
        if (data && Array.isArray(data)) {
          setUserTypingData(data);
          console.log("Typing data:", data);
        } else {
          console.error("No valid typing data available.");
        }
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
    return <div>Loading...</div>;
  }
    return (
       <>
         <div>
           
            {/* <Goal /> */}
            {/* Add dashboard components here */}
            <Graphs />
            {/* <StripeHostedPages /> */}
            <div className='lesson-list-div'>
            <LessonLists userTypingData={userTypingData}/>
            </div>
         </div>
       </>
    );
};

export default Dashboard;
