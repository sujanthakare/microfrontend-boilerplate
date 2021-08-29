import React from 'react';
import Button from './ui-components/button';

const App = () => {
  return (
    <div>
      <h1>WEBPACK-BOILERPLATE</h1>
      <Button
        title="Click"
        onClick={() => {
          console.log('BUTTON');
        }}
      />
    </div>
  );
};

export default App;
