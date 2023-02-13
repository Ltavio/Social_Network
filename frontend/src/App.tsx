import React from 'react';
import { Global } from './style/global';
import RouteMain from './routes';
import { Toast } from './components/toast';
import ContextMain from './context';


function App() {
  return (
    <>
      <ContextMain>
        <Global/>
        <RouteMain/>
        <Toast/>
      </ContextMain>
    </>
  );
}

export default App;
