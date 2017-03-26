import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';
import WorkExp from './components/WorkExp';
import _ from 'lodash';

const style = {
    paperMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'space-around',
        padding: '20px',
        height: '100vh',
        width: '100vw'
    },
    paper: {
        display: 'flex',
        background: 'none',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '768px',
        maxHeight: '200px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: 'none',
        fontFamily: 'Roboto'
    }
};

const workExp = [{
    id: 'qnst',
    img: 'http://www.mhrenovate.com/samsclub2015/aboutus/images/Quinstreet-Logo.jpg',
    text: { 
        title: 'Quinstreet',
        subTitle: '2015 - Present (~2 years)',
        content: 'Tata Consultancy Servies, or TCS, marked the beginning of my career. My initial days kept me busy with Java, however I soon began pursuing JavaScript related web developement roles.'
    },
    href: '/projectDetailsC3'
},
{
    id: 'sns',
    img: 'http://www.forgeahead.io/wp-content/uploads/2014/07/logo_desktop.png',
    text: { 
        title: 'SNS Technologies (now ForgeAhead)',
        subTitle: '2013 - 2014 (2 years)',
        content: 'Tata Consultancy Servies, or TCS, marked the beginning of my career. My initial days kept me busy with Java, however I soon began pursuing JavaScript related web developement roles.'
    },
    href: '/projectDetailsC2'
},
{
    id: 'tcs',
    img: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1280px-Tata_Consultancy_Services_Logo.svg.png',
    text: { 
        title: 'Tata Consultancy Services',
        subTitle: '2009 - 2013 (~4 years)',
        content: 'Tata Consultancy Servies, or TCS, marked the beginning of my career. My initial days kept me busy with Java, however I soon began pursuing JavaScript related web developement roles.'
    },
    href: '/projectDetailsC1'
}];
class Intro extends Component {
    
    constructor(props) {
        super(props);

        this.state = {workExp};
    }
    
    renderWorkExpDetails() {
        return (
            <div>
                {this.state.workExp.map((work, i) => (
                    <Paper key={i} style={style.paperMain}>
                        <Paper style={style.paper}>
                            <WorkExp title={work.text.title} subtitle={work.text.subTitle} imgLogo={work.img} content={work.text.content} href={work.href} />
                        </Paper>
                    </Paper>
                 ))}
            </div>
        );
    }
    
    render() {
        return (
            <div>
                <Header />
                {this.renderWorkExpDetails()}
                {/*<Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <WorkExp />
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <WorkExp />
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <WorkExp />
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <WorkExp />
                    </Paper>
                </Paper>*/}
            </div>
        );
    }
}

export default Intro;