import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';

const style = {
    paperMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'space-around',
        padding: '20px',
        height: '100vh',
        width: '100vw',
        boxShadow: 'none'
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
    highlight: {
        color: 'blue'
    },
    textHolder: {
        textAlign: 'center'
    },
    title: {
        fontFamily: '"Gloria Hallelujah"',
        fontSize: '2em',
        lineHeight: '1.5em',
        textAlign: 'center'
    }
};

/*
Architects Daughter
Give You Glory
Over the Rainbow
Pangolin
Permanent Marker
The Girl Next Door
*/

class Intro extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <div style={style.textHolder}>
                            <h2 style={style.title}>Apart from front end...</h2>
                            <p>
                                I've worked with backend technologies. Think <span style={style.highlight}>NodeJS</span> (LoopBack), <span style={style.highlight}>PHP</span> (Lavarel, Cake), <span style={style.highlight}>Python</span> (Django, Flask). I update my <span style={style.highlight}>Github</span> consistently.
                            </p>
                            <p>
                                I've used <span style={style.highlight}>React-Native</span> and <span style={style.highlight}>Native-Script</span> that leverages Javascript to build apps for iOS and Android.
                            </p>
                            <p>
                                I've studied <span style={style.highlight}>Unity3D</span>, <span style={style.highlight}>Blender</span> to develop simple games and 3D models.
                            </p>
                            <p>
                                I've tried <span style={style.highlight}>ElectronJS</span> to make desktop applications. 
                            </p>
                            <p>
                                For Augmented Reality, I am looking at tutorials, and tools such as <span style={style.highlight}>Zappar</span>, <span style={style.highlight}>Augment</span>.
                            </p>
                        </div>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Intro;