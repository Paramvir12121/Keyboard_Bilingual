import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import FirstLoginMessage from '../../../components/firstLogin/FirstLoginMessage';
import SetupPage from '../../introPages/SetupPage';

const FirstLoginModal = ({ showFirstLoginModal, setShowFirstLoginModal,showSetupModal,setShowSetupModal }) => {
    return (
        <>
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
      </>
    );
};

export default FirstLoginModal;