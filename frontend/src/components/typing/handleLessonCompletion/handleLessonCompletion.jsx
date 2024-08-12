import baseApi from '../../../hooks/baseApi';

const handleLessonCompletion = async (lessonId, score, setError) => {
    const api = baseApi();

    try {
        const response = await api.post(`/lessons/${lessonId}/complete`,{Credential: true}, { 
            lessonId,
            score
        });
        return response.data;
    } catch (error) {
        setError(error.message || 'An error occurred while completing the lesson');
        throw error;
    }
}

export default handleLessonCompletion;