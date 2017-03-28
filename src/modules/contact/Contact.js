import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router';
import {blue500} from 'material-ui/styles/colors'
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
        fontSize: '2em',
        textAlign: 'center',
        lineHeight: '1.5em'
    },
    socials: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    socialLink: {
        color: '#2196f3',
        margin: '2vw 3vw'
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
                        <div style={style.socials}>
                            <Link href="https://www.github.com/misaal9" target="_blank">
                                <FontAwesome 
                                    name='github'
                                    style={style.socialLink}
                                    size='2x'
                                />
                            </Link>
                            <Link href="https://www.facebook.com/misaal9" target="_blank">
                                <FontAwesome 
                                    color={blue500}
                                    style={style.socialLink}
                                    name='facebook'
                                    size='2x'
                                />
                            </Link>
                            <Link href="https://www.twitter.com/misaal9" target="_blank">
                                <FontAwesome 
                                    name='twitter'
                                    style={style.socialLink}
                                    size='2x'
                                />
                            </Link>
                            <Link href="mailto:misaal9@gmail.com" target="_blank">
                                <FontAwesome 
                                    name='envelope'
                                    style={style.socialLink}
                                    size='2x'
                                />
                            </Link>
                        </div>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Intro;