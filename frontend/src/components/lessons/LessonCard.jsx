import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import baseApi from '../Api/BaseApi';


const LessonCard = ({ lesson }) => {
        

        const startLesson = async (lessonId) => {
            try {
              const token = localStorage.getItem('access_token');
              if (!token) {
                console.error('No access token found. Please log in.');
                return;
              }
        
              const response = await baseApi.post(`/lessons/user_lesson/${lessonId}`, {
                completed: false,
                score: 0
              }, {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              });
        
              console.log('User lesson started successfully:', response.data);
            } catch (error) {
              console.error('Error starting lesson:', error.response ? error.response.data.message : error.message);
            }
          };
      
        return (
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{lesson.title}</Card.Title>
              <Card.Text>{lesson.description}</Card.Text>
              <Card.Text>Difficulty: {lesson.difficulty}</Card.Text>
              <Card.Text>Keys: {Object.keys(keys).join(', ')}</Card.Text>
              <Card.Text>Words: {words.words}</Card.Text>
                <Button onClick={() => startLesson(lesson.id)}>Start Lesson</Button>
            </Card.Body>
          </Card>
        );
      };
    
export default LessonCard