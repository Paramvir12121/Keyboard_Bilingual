// useFetchSettings.js

import { useState, useEffect } from 'react';
import baseApi from './baseApi';
import Cookies from 'js-cookie';

const useFetchSettings = (shouldFetchOnMount = true) => {
  const [settings, setSettings] = useState(null);
  const [error, setError] = useState(null);

  const api = baseApi();
  

  const fetchSettings = async () => {
    try {
      const response = await api.get('/settings/all', { withCredentials: true });
      if (response.status === 200) {
        console.log('Settings fetched successfully:', response.data);
        Cookies.set('settings', JSON.stringify(response.data), { expires: 365 });
        setSettings(response.data);
      }
    } catch (err) {
      setError(err);
      console.error('Error fetching settings:', err);
    }
  };

  
  useEffect(() => {
    if (shouldFetchOnMount) {
      fetchSettings();
    }
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const updateSettings = async (newSettings) => {
    try {
      const response = await api.put('/settings/all', newSettings, { withCredentials: true });
      if (response.status === 200) {
        console.log('Settings updated successfully:', response.data);
        Cookies.set('settings', JSON.stringify(newSettings), { expires: 365 });
        setSettings(newSettings);
      }
    } catch (err) {
      setError(err);
      console.error('Error updating settings:', err);
    }
  };

  return { settings, error, updateSettings, fetchSettings };
};

export default useFetchSettings;
