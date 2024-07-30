import { useState, useEffect, useCallback } from 'react';
import baseApi from './baseApi';
import Cookies from 'js-cookie';

const useFetchSettings = () => {
    const [settings, setSettings] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const api = baseApi();

    const fetchSettings = useCallback(async () => {
        try {
            const response = api.get('/settings/all', { withCredentials: 'true' });
            setSettings(response.data);
            Cookies.set('settings', JSON.stringify(response.data), { expires: 365 });
        } catch (err) {
            console.error('Error fetching settings:', err);
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchSettings();
    }, [fetchSettings]);

    return { settings, error, isLoading, fetchSettings };
}

export default useFetchSettings;
