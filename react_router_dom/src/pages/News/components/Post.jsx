import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { getPostById } from '../../../services/getPostById';

export function Post() {
    const [title, setTitle] = useState(null);
    const [body, setBody] = useState(null);
    
   
    const { id } = useParams();

    useEffect(() => {
        getPostById(id).then(body => {
            setTitle(body.title);
            setBody(body.body)
        })
        
      }, [id])



  return (
    <Container>

      <Card>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>         
              {body}
            </p>           
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  )
}
