import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { getTodoById } from '../../../services/getTodoById';

export function Todo() {
    const [title, setTitle] = useState(null);
    const [completed, setCompleted] = useState(null);
    
   
    const { id } = useParams();

    useEffect(() => {
      getTodoById(id).then(body => {
            setTitle(body.title);
            setCompleted(body.completed)
        })
        
      }, [id])



  return (
    <Container>

      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
          <input type="checkbox" checked={completed}/>
          Done           
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  )
}
