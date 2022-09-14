import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../../store/features/postSlice';
import { Container } from 'react-bootstrap';
import { CardPost } from './components/CardPost';




export function News() {
  const posts = useSelector(state => state.posts.posts);
  const dispatch = useDispatch();




  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch])
  
  return (
    <main>
        <Container className='d-flex flex-wrap gap-3'>
        {Array.isArray(posts) && posts.map(post => <CardPost key={post.id} data={post} />)}
        </Container>
    </main>
  )
}