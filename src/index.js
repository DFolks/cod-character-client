import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Welcome from './components/welcome';
import registerServiceWorker from './registerServiceWorker';
import CreateCharacter from './components/createChar';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <CreateCharacter />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
