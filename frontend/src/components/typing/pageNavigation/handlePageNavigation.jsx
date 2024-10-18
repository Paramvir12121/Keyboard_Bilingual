import { useNavigate } from "react-router-dom";

const handlePageNavigation = (lessonId, buttonPressed) => {
    const navigate = useNavigate();
    lessonId = parseInt(lessonId);
    
    const handleRetakeLesson = () => {
        navigate(0); // Force page reload
    };
    
    return {
        handleRetakeLesson
    };
    }