import React from 'react';
import { useDispatch } from 'react-redux';
import { removePost } from '../../../store/features/postSlice';
import { Card as PostCard} from 'react-bootstrap';

/* eslint-disable */
export function CardPost({data}) {
  const dispatch = useDispatch();
  const { title, body, id} = data;
/* eslint-enable */
  return (
    <PostCard style={{ width: '18rem' }}>    
    <PostCard.Body style={{ display: 'flex', flexDirection: 'column' }}>
      <PostCard.Title>{title}</PostCard.Title>
      <PostCard.Text style={{ flex: 1}}>
       {body}       
      </PostCard.Text>
      <button onClick={() => dispatch(removePost(id))}>Delete</button>
    </PostCard.Body> 
    </PostCard>
  );
}
