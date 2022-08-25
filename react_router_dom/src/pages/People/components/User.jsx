import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import { getUserById } from '../../../services/getUserById'

export function User() {
    const [state, setState] = useState({
        name: null,
        email: null,
        phone: null,
        website: null,
        username: null,  

    })
       
    const { id } = useParams();

    useEffect(() => {
        getUserById(id).then(body => {
            setState({
                name: body.name,
                email: body.email,
                phone: body.phone,
                website: body.website,
                username: body.username,    
            })
        })
        
      }, [id])



  return (
    <Container>

      <Card>
        <Card.Header>{state.name}</Card.Header>
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <p>         
              <b>email</b>: {state.email}
            </p>
            <p>         
              <b>phone</b>: {state.phone}
            </p>     
            <p>         
              <b>website</b>: {state.website}
            </p> 
            <p>         
              <b>username</b>: {state.username}
            </p>      
          </blockquote>
        </Card.Body>
      </Card>
    </Container>
  )
}
