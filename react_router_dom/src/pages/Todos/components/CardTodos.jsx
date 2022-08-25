import React from 'react';
import { Link } from 'react-router-dom';
import { Card as PostCard} from 'react-bootstrap';

export function CardTodos(props) {
    /* eslint-disable */
  const { title, completed, id } = props;
    /* eslint-enable */



  return (
    <PostCard style={{ width: '18rem' }}>    
    <PostCard.Body style={{ display: 'flex', flexDirection: 'column' }}>
      <PostCard.Title>{title}</PostCard.Title>
      <PostCard.Text style={{ flex: 1}}>
        <input type="checkbox" checked={completed}/>
        Done
      </PostCard.Text>
      <Link to={`/todos/${id}`} variant="primary" style={{ width: '40%', border: 'none'}}>Open</Link>
    </PostCard.Body> 
    </PostCard>
  );
}