import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getTodos } from '../../services/getTodos';
import { CardTodos } from './components/CardTodos';




export function Todos() {
  const [todos, setTodos] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    getTodos().then(body => setTodos(body));
    setIsLoading(false)
  }, [])
  
  return (
    <main>
        <Container className='d-flex flex-wrap gap-3'>
        {isLoading && <h1>Loading...</h1>}
        {Array.isArray(todos) && todos.map(todo => <CardTodos key={todo.id} {...todo} />)}
        </Container>
    </main>
  )
}