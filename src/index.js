import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route/*, Link*/, browserHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Intro from './modules/intro/Intro';
import About from './modules/about/About';
import PrimSkills from './modules/skills/PrimSkills';
import SecSkills from './modules/skills/SecSkills';
import Projects from './modules/projects/Projects';
import Next from './modules/next/Next';
import This from './modules/this/This';
import Contact from './modules/contact/Contact';
import Work from './modules/work/Work';
import './index.css';

injectTapEventPlugin();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={browserHistory}>
            <Route path='/' component={Intro} />
            <Route path='/about' component={About} />
            <Route path='/projects' component={Projects} />
            <Route path='/work' component={Work} />
            <Route path='/primSkills' component={PrimSkills} />
            <Route path='/secSkills' component={SecSkills} />
            <Route path='/next' component={Next} />
            <Route path='/this' component={This} />
            <Route path='/contact' component={Contact} />
        </Router>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
