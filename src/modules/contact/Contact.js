import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

/*
import FA from 'react-fontawesome';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
*/


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
    title: {
        fontFamily: '"Gloria Hallelujah"',
        fontSize: '2em'
    }
};
class Intro extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <h2 style={style.title}>Looking To Get In Touch?</h2>
                        <TextField
                            hintText='Enter your name'
                            fullWidth={true}
                        />
                        <TextField
                            hintText='Enter your email'
                            fullWidth={true}
                        />
                        <p>&nbsp;</p>
                        <RaisedButton label='Submit' primary={true} fullWidth={true} />
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Intro;