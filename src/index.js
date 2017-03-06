import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route/*, Link*/, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Intro from './modules/intro/Intro';
import PrimSkills from './modules/skills/PrimSkills';
import SecSkills from './modules/skills/SecSkills';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path='/' component={Intro} />
            <Route path='/primSkills' component={PrimSkills} />
            <Route path='/secSkills' component={SecSkills} />
        </Router>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
