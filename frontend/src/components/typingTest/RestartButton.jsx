import { useRef } from "react";
import { MdRefresh } from "react-icons/md";


const RestartButton = ({handleRestart, className=""}) => {
    const buttonRef = useRef(null);

    const handleClick = () => {
      if (buttonRef.current) {
        buttonRef.current.blur();
      }
      handleRestart();
    };

        return <button onClick={handleClick} className={className}>
            <MdRefresh />
            </button>
    }

export default RestartButton;