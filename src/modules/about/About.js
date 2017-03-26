import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';

const userIcon = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Antu_im-kick-user.svg/2000px-Antu_im-kick-user.svg.png';

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
    },
    userIcon: {
        width: '25vw'
    },
    title: {
        fontFamily: '"Gloria Hallelujah"',
        fontSize: '2em',
        lineHeight: '1.5em',
        textAlign: 'center'
    },
    center: {
        textAlign: 'center'
    }
};
class Intro extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <img src={userIcon} style={style.userIcon} role="presentation" />
                        <h2 style={style.title}>Rohit</h2>
                        <div style={style.center}>
                            <p>
                                I'm a Pune/ Mumbai based JavaScript developer, with an creative way of 
                                visualizing UI and an excellent eye for detail. I specialise in FrontEnd technologies and frameworks,
                                and have recently been exploring other open source options as well. This includes backend,
                                mobile apps, plugins and games using JavaScript.
                            </p>
                            <p>
                                Apart from my craze for web development, I have an active interest in UI/ UX design, 
                                animations and 3D-modelling, designing 2D games and exploring scope of JavaScript in 
                                hardware related programming.
                            </p>
                        </div>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Intro;