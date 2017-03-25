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
                        <h2>Rohit</h2>
                        <p>
                            I'm a Mumbai-Pune based JavaScript developer. I specialise in FrontEnd technologies and frameworks,
                            and have recently been exploring other options in Javascript as well. This includes not just backend,
                            but also mobile apps, plugins and games using Javascript mostly.
                        </p>
                        <p>
                            Apart from my interest in Javascript, I have an active intereset in UI design, analyse and better UX flows, 
                            animations and 3D-modelling, designing 2D games and also exploring scope of Javascript in 
                            hardware related programming.
                        </p>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Intro;