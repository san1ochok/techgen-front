import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

interface IRoute {
  path: string;
  elem: JSX.Element;
}

//* lazy pages imports
const SignIn = React.lazy(() => import('./pages/SignIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));
const Restore = React.lazy(() => import('./pages/Restore'));
const HomePage = React.lazy(() => import('./pages/HomePage'));

const App = (): JSX.Element => {
  //* routes
  const routes: IRoute[] = [
    { path: '/techgen-front/signIn', elem: <SignIn /> },
    { path: '/techgen-front/signUp', elem: <SignUp /> },
    { path: '/techgen-front/restore', elem: <Restore /> },
    { path: '/techgen-front/HomePage', elem: <HomePage /> },
  ];

  //* AOS init
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);

  return (
    <>
      <React.Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, i) => (
            <Route key={i} path={route.path} element={route.elem} />
          ))}
        </Routes>
      </React.Suspense>
    </>
  );
};

export default App;
