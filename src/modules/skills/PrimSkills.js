import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';
import PieFrameworks from './components/PieFrameworks';
import PieUtility from './components/PieUtility';

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
    titleHeader: {
        fontFamily: '"Gloria Hallelujah"',
        fontSize: '2em'
    },
    topSpacer: {
        marginTop: '100px'
    }
};

class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <Paper style={style.chartHolder}>
                        <h2 style={style.titleHeader}>My primary skillset</h2>
                        <p>The following charts give an idea of my level of proficiency in the mentioned frameworks/ tools. I have rated my level on a scale of 1 to 10, 10 being the highest.</p>
                        <p style={style.topSpacer}>Scroll down</p>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <h2 style={style.titleHeader}>Javascript UI Frameworks</h2>
                    <Paper style={style.chartHolder}>
                        <PieFrameworks />
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <h2 style={style.titleHeader}>Utility Libraries</h2>
                    <Paper style={style.chartHolder}>
                        <PieUtility />
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Details;