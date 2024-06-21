

import { Navigate } from "react-router-dom";

const SucessMessage = ({ message }) => {
    handleRedirect = () => {
        Navigate("/dashboard");
    }
   

    return (
        message ? <div className="alert alert-success" role="alert">{message}</div> : null
    );
}

export default SucessMessage;

