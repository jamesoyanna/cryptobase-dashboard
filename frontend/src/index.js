// imports
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
import Routing from './router';

// render the router
ReactDOM.render(
    Routing,
    document.getElementById('root')
);

serviceWorker.unregister();
