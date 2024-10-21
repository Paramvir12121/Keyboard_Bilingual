import { useState, useEffect, useCallback } from 'react';
import baseApi from './baseApi';
import Cookies from 'js-cookie';

const useFetchSettings = () => {
  const [settings, setSettings] = useState(null);
  const [error, setError] = useState(null);
  const api = baseApi();

  const fetchSettings = useCallback(async () => {
    try {
      // Try to get settings from cookies
      const cookieSettings = Cookies.get('settings');
      if (cookieSettings) {
        setSettings(JSON.parse(cookieSettings));
        return JSON.parse(cookieSettings);
      }

      // Fetch from API if no settings in cookies
      const response = await api.get('/settings/all', { withCredentials: true });
      if (response.status === 200) {
        setSettings(response.data);
        Cookies.set('settings', JSON.stringify(response.data), { expires: 365 });
        return response.data;
      }
    } catch (err) {
      console.error('Error fetching settings:', err);
      setError(err);
    }
  }, [api]); // Memoize to avoid recreating the function on every render

  const updateSettings = useCallback(async (newSettings) => {
    try {
      const response = await api.put('/settings/all', newSettings, { withCredentials: true });
      if (response.status === 200) {
        setSettings(newSettings);
        Cookies.set('settings', JSON.stringify(newSettings), { expires: 365 });
        console.log('Settings updated successfully:', response.data);
      }
    } catch (err) {
      console.error('Error updating settings:', err);
      setError(err);
    }
  }, [api]);

  // Fetch settings when the hook is mounted
  useEffect(() => {
    fetchSettings();
  }, [fetchSettings]);

  return { settings, error, updateSettings, fetchSettings };
};

export default useFetchSettings;
