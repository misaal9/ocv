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
                            <h2 style={style.title}>Apart from front end technologies...</h2>
                            <p>
                                I practice and develop in backend technologies too. Think <span style={style.highlight}>NodeJS</span> (LoopBack), <span style={style.highlight}>PHP</span> (Lavarel, Cake, Slim), <span style={style.highlight}>Python</span> (Django, Flask). I experiment with new coding standards and techiques and update my <span style={style.highlight}>Github</span> repo consistently.
                            </p>
                            <p>
                                I am active in mobile development, using Javacript frameworks. Think <span style={style.highlight}>React-Native</span> and <span style={style.highlight}>Native-Script</span> that leverages Javascript to build apps for iOS and Android.
                            </p>
                            <p>
                                I have explored 2D games for mobile. I have worked with <span style={style.highlight}>Unity3D</span> to develop this. Not just for mobiles, but PC games too. I have an active interest in 3D modelling using <span style={style.highlight}>Blender</span>.
                            </p>
                            <p>
                                Windows and iOS apps using Javascript frameworks (again). Think <span style={style.highlight}>ElectronJS</span>, similar. 
                            </p>
                            <p>
                                Progress in the field of Augmented Reality has caught my attention and I have been reading the latest on AR developement. Think <span style={style.highlight}>Zappar</span>, <span style={style.highlight}>Augment</span>.
                            </p>
                        </div>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Intro;