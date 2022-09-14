import React from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import { Home, People, News, Todos} from '../pages';
import { User } from '../pages/People/components/User'
import { Todo } from '../pages/Todos/components/Todo';

const MainWrapper = styled.main`
padding: 20px 0;
flex: 1`

export function Main() {
  return (
    <MainWrapper>           
        <Routes>
            <Route index element={<Home />} />
            <Route path='/people' element={<People />} />
            <Route path='/todos' element={<Todos />} />
            <Route path='/news' element={<News />} />
            <Route path='/users/:id' element={<User />} />
            <Route path='/todos/:id' element={<Todo />} />
        </Routes>
    </MainWrapper>
  )
}
