import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

import * as models from './store/models';
import { Provider } from 'react-redux';
import { init } from '@rematch/core';

const store = init({
  models
});

axios.defaults.baseURL = 'https://poems-bitch.firebaseio.com';

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
