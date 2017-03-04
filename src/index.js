import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route/*, Link*/, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Intro from './modules/intro/Intro';
import Details from './modules/details/Details';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path='/' component={Intro} />
            <Route path='/details' component={Details} />
        </Router>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
