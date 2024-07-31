import React, { useEffect } from 'react';
import Cookies from 'js-cookie';
import baseApi from '../hooks/baseApi';

const Test1 = () => {
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

  const updateSettings = async () => {
      try {
        const response = await api.put('/settings/all', defaultSettings, { withCredentials: true });
        if(response.status === 200) {
          console.log('Settings updated successfully:', response.data);
        }
      } catch (err) {
        console.error('Error updating settings:', err);
      }
    }
  

  const defaultSettings = {
    keyboard_layout: 'QWERTY',
    font_size: 'medium',
    audio_feedback: {
      key_press_sound: true,
      completion_sound: true,
      error_sound: true,
      background_music: {
        enabled: true,
        volume: 0.5,
        track: ''
      }
    },
    feedback_settings: {
      show_success_rate: true,
      show_average_time: true,
      enable_error_heatmap: true
    },
    advanced_learning_options: {
      typing_speed_goal: 50,
      accuracy_goal: 90,
      custom_lessons: []
    },
    notifications: {
      email_notifications: true,
      app_notifications: true,
      reminders: {
        enabled: true,
        time: '18:00'
      }
    }
  };

  // Serialize the object before storing it in cookies
  // Cookies.set('settings', JSON.stringify(defaultSettings));
  const settings = Cookies.get('settings');
  
  // Parse the JSON string to an object, handling the case where the cookie is undefined
  const parsedKeyboard = settings ? JSON.parse(settings).keyboard_layout : "None";

  return (
    <div>
      test1
      <br />
      {defaultSettings.keyboard_layout}
      <br />
      {parsedKeyboard}
      <br />
      <button onClick={fetchSettings}>Fetch Settings</button>
      <br />
      <br />
      <button onClick={updateSettings}>Update Settings</button>
    </div>
  );
};

export default Test1;
