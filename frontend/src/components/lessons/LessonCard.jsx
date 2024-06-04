import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import baseApi from '../hooks/BaseApi';
import { useNavigate } from 'react-router-dom';


const LessonCard = ( {props} ) => {
  const navigate = useNavigate();

      function clickHandler () {
          console.log("Clicked", props.id)
          navigate("")
      }  
            
      
        return (
          <Card className="mb-1">
            <Card.Body>
              <Card.Title>{props.title}</Card.Title>
              {/* <Card.Text>{props.description}</Card.Text> */}
              <Card.Text>Difficulty: {props.difficulty}</Card.Text>
              <Card.Text>Keys: {props.keys}</Card.Text>
              <Card.Text>Words: {props.words}</Card.Text>
                <Button onClick={clickHandler}>Start Lesson</Button>
            </Card.Body>
          </Card>
        );
      };
    
export default LessonCard