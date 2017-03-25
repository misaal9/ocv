import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';

const imgSrc = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bull_cartoon_04.svg/425px-Bull_cartoon_04.svg.png';

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
    roman: {
        fontFamily: 'Times New Roman',
        textAlign: 'center',
        lineHeight: '1.3em'
    },
    img: {
        width: '75%'
    },
    h1: {
        textAlign: 'center',
        fontSize: '2.5em',
        lineHeight: '1.2em',
        fontFamily: 'Gloria Hallelujah'
    },
    imgHolder: {
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
                        <div style={style.imgHolder}><img src={imgSrc} style={style.img} role='presentation' /></div>
                        <h1 style={style.h1}>A Javascript Developer</h1>
                        <div style={style.roman}>/ˈdʒɑːvəˌskrɪpt - dɪˈvɛləpə/ 1. A person who has been studying a new framework for the past 6 months only to find out it got outdated 2 weeks ago. 2. A person who has explained to somebody atleast once that JavaScript is not related to Java. 3. Me.</div>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Intro;