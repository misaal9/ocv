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
import Contact from './modules/contact/Contact';
import Work from './modules/work/Work';
import ProjectDetailsC1 from './modules/work/companies/Details_C1';
import ProjectDetailsC2 from './modules/work/companies/Details_C2';
import ProjectDetailsC3 from './modules/work/companies/Details_C3';
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
            <Route path='/contact' component={Contact} />
            <Route path='/projectDetailsC1' component={ProjectDetailsC1} />
            <Route path='/projectDetailsC2' component={ProjectDetailsC2} />
            <Route path='/projectDetailsC3' component={ProjectDetailsC3} />
        </Router>
    </MuiThemeProvider>
    ,
    document.getElementById('root')
);
