import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Provider from "react-redux/es/components/Provider";
import {createStore} from './utils/createStore';
import {createHistory} from './utils/createHistory';
import {ConnectedRouter} from 'connected-react-router';

require.context('../static/', true);


const history = createHistory();
const store = createStore(history);
console.log('Channel state: ', store.getState());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
