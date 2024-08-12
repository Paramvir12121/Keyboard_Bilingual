

const SucessMessage = ({ message }) => {

    return (
        message ? <div className="alert alert-success" role="alert">{message}</div> : null
    );
}

export default SucessMessage;

