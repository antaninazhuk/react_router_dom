import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getUsers } from '../../services/getUsers';
import { CardPeople } from './components/CardPeople'




export function People() {
  const [users, setUsers] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    getUsers().then(body => setUsers(body));
    setIsLoading(false)
  }, [])
  
  return (
    <main>
        <Container className='d-flex flex-wrap gap-3'>
        {isLoading && <h1>Loading...</h1>}
        {Array.isArray(users) && users.map(user => <CardPeople key={user.id} {...user} />)}
        </Container>
    </main>
  )
}