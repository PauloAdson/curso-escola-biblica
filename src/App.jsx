import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';

import { Login } from './components/Login/Login';

import { Logintest } from './components/Login/Logintest';
import { HomeCurso } from './Curso/HomeCurso';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />

          <Route path='/login' element={
            <Login />
          } />

          <Route path='/curso' element={
            <HomeCurso />
          } />



          <Route path='*' element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />

          <Route path='/logintest' element={
            <>
              <Logintest />
            </>
          } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
