import { FC } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import NotFound from "./NotFound";
import Product from "./Product";

const App: FC = () => {

  return (
    <>
      <Routes>
        <Route path="*" element={ <NotFound /> } />
        <Route path={ '/' } element={ <Navigate to="/" replace /> } />
        <Route path={ '/product' } element={ <Product /> } />
      </Routes>
    </>
  );
};

export default App;
