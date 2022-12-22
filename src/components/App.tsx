import * as React from 'react';
import Spinner from './Spinner/Spinner';

//* lazy pages imports

const App = (): JSX.Element => {
  return (
    <div>
      <h1>Hello World</h1>
      <Spinner />
    </div>
  );
};
export default App;
