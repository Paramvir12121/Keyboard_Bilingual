import { useState, useEffect, useCallback } from 'react';
import baseApi from './baseApi';
import Cookies from 'js-cookie';

const useFetchSettings = () => {
    const [settings, setSettings] = useState(null);
    const [error, setError] = useState(null);
   
    const api = baseApi();

    const fetchSettings = async () => {
        try {
          const response = await api.get('/settings/all', { withCredentials: true });
          if(response.status === 200) {
            console.log('Settings fetched successfully:', response.data);
            Cookies.set('settings', JSON.stringify(response.data), { expires: 365 });
          }
        } catch (err) {
          console.error('Error fetching settings:', err);
        }
      };

    const updateSettings = async (settings) => {
        try {
          const response = await api.put('/settings/all', settings, { withCredentials: true });
          if(response.status === 200) {
            console.log('Settings updated successfully:', response.data);
          }
        } catch (err) {
          console.error('Error updating settings:', err);
        }
      }

    

    return { settings, error, updateSettings, fetchSettings };
}

export default useFetchSettings;
