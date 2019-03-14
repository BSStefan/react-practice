// @flow
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import Routes from './layout/routes/Routes';
import DefaultLayout from './layout/default-layout/DefaultLayout';

class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <DefaultLayout>
            <Routes />
          </DefaultLayout>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
