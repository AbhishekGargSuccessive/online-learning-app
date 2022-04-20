import React from 'react';
import {Provider} from 'react-redux';
import store from './app/redux/store';
import RouteNavigation from './app/routes/RouteNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <RouteNavigation />
    </Provider>
  );
};

export default App;
