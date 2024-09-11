import { BrowserRouter, Route, Router, Routes} from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home';
import { Footer } from './components/Footer/Footer';

import { Login } from './components/Login/Login';

// import { Logintest } from './components/Login/Logintest';
import { HomeCurso } from './Curso/HomeCurso';
import PrivateRoute from './components/Login/PrivateRoute';

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

          <Route path='/login' element={<Login />} />

          <Route path='/curso'
            element={
              <PrivateRoute>
                <HomeCurso />
              </PrivateRoute>
            } />

          <Route path='*' element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
