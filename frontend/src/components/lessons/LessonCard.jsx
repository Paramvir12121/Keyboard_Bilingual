import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const LessonCard = ({ lesson }) => {
        const keys = JSON.parse(lesson.keys).keys;
        const words = JSON.parse(lesson.words);
      
        return (
          <Card className="mb-3">
            <Card.Body>
              <Card.Title>{lesson.title}</Card.Title>
              <Card.Text>{lesson.description}</Card.Text>
              <Card.Text>Difficulty: {lesson.difficulty}</Card.Text>
              <Card.Text>Keys: {Object.keys(keys).join(', ')}</Card.Text>
              <Card.Text>Words: {words.words}</Card.Text>
              {/* <Button onClick={() => startLesson(lesson.id)}>Start Lesson</Button> */}
            </Card.Body>
          </Card>
        );
      };
    
export default LessonCard