import React from 'react';
import { Link } from 'react-router-dom';
import { Card as PostCard} from 'react-bootstrap';

export function CardPeople(props) {
    /* eslint-disable */
  const { name, email, phone, id } = props;
    /* eslint-enable */
  return (
    <PostCard style={{ width: '18rem' }}>    
    <PostCard.Body style={{ display: 'flex', flexDirection: 'column' }}>
      <PostCard.Title>{name}</PostCard.Title>
      <PostCard.Text style={{ flex: 1}}>
        <p>{email}</p>
        <p>{phone}</p>
      </PostCard.Text>
      <Link to={`/users/${id}`} variant="primary" style={{ width: '40%', border: 'none'}}>Read more</Link>
    </PostCard.Body> 
    </PostCard>
  );
}
