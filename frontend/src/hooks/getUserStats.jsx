import baseApi from './baseApi';



export const getUserLesonData = async () => {
  const api = baseApi();
  try {
    const response = await api.get('/lessons/typingspeed');
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      console.warn("User not authenticated for typing data");
      return []; // Return empty array for unauthenticated users
    }
    throw error; // Rethrow other errors
  }
}

