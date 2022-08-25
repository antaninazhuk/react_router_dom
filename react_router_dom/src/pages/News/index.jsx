import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { getPosts } from '../../services/getPosts';
import { CardPost } from './components/CardPost';




export function News() {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);



  useEffect(() => {
    setIsLoading(true);
    getPosts().then(body => setNews(body));
    setIsLoading(false)
  }, [])
  
  return (
    <main>
        <Container className='d-flex flex-wrap gap-3'>
        {isLoading && <h1>Loading...</h1>}
        {Array.isArray(news) && news.map(post => <CardPost key={post.id} {...post} />)}
        </Container>
    </main>
  )
}