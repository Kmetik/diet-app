import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import { History } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import {Routes} from './components/routes';

interface AppProps {
  history: History
}

const  App:React.FC<AppProps>= ({history})=> {
  return (
    <BrowserRouter basename="/">
      <ConnectedRouter history={history}>
              <Routes />
      </ConnectedRouter>
    </BrowserRouter>
  
  );
}

export default App;
