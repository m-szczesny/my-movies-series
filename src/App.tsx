import React from 'react';
import { Router } from './components/Router';
import './App.css';
import 'antd/dist/antd.css';
import ConfigContext from './context/ConfigContext';
import { useApiConfig } from './hooks/useApiConfig';

function App() {
  // themoviedb api config is needed for further calls to the api
  const [config] = useApiConfig();
  return (
    <div className='app'>
      {
        config &&
        <ConfigContext.Provider value={config}>
          <Router />
        </ConfigContext.Provider>
      }
    </div>
  );
}

export default App;
