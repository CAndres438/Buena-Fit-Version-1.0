import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';
import AppRoutes from './routes/AppRoutes';
import GlobalStyle from './styled/GlobalStyle';




ReactDOM.render(
  <Provider store={store}>
    <GlobalStyle/>
    <AppRoutes/>
  </Provider>,
  document.getElementById('root')
);


