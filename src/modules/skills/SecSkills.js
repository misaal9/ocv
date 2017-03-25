import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';


const style = {
    paperMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        padding: '20px',
        height: '100vh',
        textAlign: 'center'
    },
    chartHolder: {
        background: 'none',
        width: '100%',
        maxWidth: '768px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: 'none',
        fontFamily: 'Roboto'
    },
    title: {
        fontFamily: '"Gloria Hallelujah"',
        fontSize: '2em'
    },
};

class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <h2 style={style.title}>Summary Of skill set</h2>
                </Paper>
            </div>
        );
    }
}

export default Details;