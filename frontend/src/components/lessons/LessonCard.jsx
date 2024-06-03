import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import baseApi from '../hooks/BaseApi';


const LessonCard = ( {props} ) => {
        
            
      
        return (
          <Card className="mb-1">
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              {/* <Card.Text>{props.description}</Card.Text> */}
              <Card.Text>Difficulty: {props.difficulty}</Card.Text>
              <Card.Text>Keys: {props.keys}</Card.Text>
              <Card.Text>Words: {props.words}</Card.Text>
                <Button>Start Lesson</Button>
            </Card.Body>
          </Card>
        );
      };
    
export default LessonCard