const ErrorMessage = ({ message }) => (
    message ? <div className="alert alert-danger" role="alert">{message}</div> : null
  );
  

export default ErrorMessage;