import baseApi from './baseApi';



    const api = baseApi();

    export const getUserLesonData = async () => {
      try{
        const response = await api.get('/lessons/typingspeed', {withCredentials: true});
        console.log("getTypingSpeed Response: ",response);
        return response.data;
        
    }catch(error){
        console.error(error);
    }   
    }

