// Dashboard.jsx
import React, { useEffect, useState } from 'react';
import Graphs from "./components/Graphs";
import LessonLists from '../lessons/LessonLists';
import Loading from '../../components/common/Loading';
import FirstLoginMessage from '../../components/firstLogin/FirstLoginMessage';
import SetupPage from '../introPages/SetupPage';
import { getUserLesonData } from '../../hooks/getUserStats';
import useFetchSettings from '../../hooks/useFetchSettings';

import Modal from 'react-bootstrap/Modal'; // Import Modal

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
      } catch (error) {
        console.error('Error fetching typing data:', error);
      }
    };
    fetchTypingData();

    // Show FirstLoginMessage if user hasn't completed setup
    if (userSettingsData && !userSettingsData.setupComplete) {
      setShowFirstLoginModal(true);
    }
  }, [userSettingsData]);

  if (error) {
    return <div>Error fetching settings: {error.message}</div>;
  }

  if (!userSettingsData || !userTypingData) {
    return <Loading />;
  }

  return (
    <div>
      <Graphs userTypingData={userTypingData} userSettingsData={userSettingsData} />
      <div className="lesson-list-div">
        <LessonLists userTypingData={userTypingData} />
      </div>

      {/* FirstLoginMessage Modal */}
      <Modal
        show={showFirstLoginModal}
        onHide={() => setShowFirstLoginModal(false)}
        centered
        backdrop="static"
        keyboard={false}
        dialogClassName="custom-modal"
      >
        <Modal.Body>
          <FirstLoginMessage
            closeOverlay={() => setShowFirstLoginModal(false)}
            startSetup={() => {
              setShowFirstLoginModal(false);
              setShowSetupModal(true);
            }}
          />
        </Modal.Body>
      </Modal>

      {/* SetupPage Modal */}
      <Modal
        show={showSetupModal}
        onHide={() => setShowSetupModal(false)}
        centered
        backdrop="static"
        keyboard={false}
        size="lg"
        dialogClassName="custom-modal"
      >
        <Modal.Body>
          <SetupPage closeOverlay={() => setShowSetupModal(false)} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Dashboard;
