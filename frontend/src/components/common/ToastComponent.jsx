import Toast from 'react-bootstrap/Toast';

const ToastComponent = ({toastTitle, toastMessage}) => {
  return (
    <Toast>
      <Toast.Header>
        {/* <img src="holder.js/20x20?text=%20" className="rounded me-2" alt="" /> */}
        <strong className="me-auto">{toastTitle}</strong>
        {/* <small>{toastTime}</small> */}
      </Toast.Header>
      <Toast.Body>{toastMessage}</Toast.Body>
    </Toast>
  );
}

export default ToastComponent;