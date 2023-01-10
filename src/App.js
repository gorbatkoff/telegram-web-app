import { React, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { useTelegram } from './hooks/useTelegram';

import Form from './components/Form/Form';
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';

import './App.css';

function App() {

  const { onToggleButton, tg } = useTelegram();

  useEffect(() => {
    tg.ready()
  }, [])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<ProductList />} />
        <Route path={'/form'} element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
