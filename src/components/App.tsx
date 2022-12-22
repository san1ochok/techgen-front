import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import Loader from './Loader';

interface IRoute {
  path: string;
  elem: JSX.Element;
}

//* lazy pages imports
const SignIn = React.lazy(() => import('./pages/SignIn'));
const SignUp = React.lazy(() => import('./pages/SignUp'));

const App = (): JSX.Element => {
  //* routes
  const routes: IRoute[] = [
    { path: '/signIn', elem: <SignIn /> },
    { path: '/signUp', elem: <SignUp /> },
  ];

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
