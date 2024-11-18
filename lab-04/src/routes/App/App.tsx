import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from './NotFound/NotFound';
import Product from './Product/Product';
import Characteristics from './Product/Description/Characteristics/Characteristics';
import Comments from "./Product/Description/Comments/Comments.tsx";
import Questions from "./Product/Description/Questions/Questions.tsx";
import Main from "./Main/Main.tsx";

const App: FC = () => {

  return (
    <>
      <Routes>
        <Route path="*" element={ <NotFound /> } />
        <Route path={ '/' } element={ <Main /> } />
        <Route path='product/:id/*' element={ <Product /> } />
        <Route path={ '/product/:id/characteristics' } element={ <Characteristics /> } />
        <Route path={ '/product/:id/comments' } element={ <Comments /> } />
        <Route path={ '/product/:id/questions' } element={ <Questions /> } />
      </Routes>
    </>
  );
};

export default App;
