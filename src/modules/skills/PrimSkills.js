import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';
import Pie from './components/Pie';
import Pie2 from './components/Pie2';
import Pie3 from './components/Pie3';
import Pie4 from './components/Pie4';


const style = {
    paperMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        background: '#002800',
        padding: '20px',
        height: '100vh',
        color: '#fff',
        textAlign: 'center'
    },
    chartHolder: {
        background: 'none',
        color: '#fff',
        width: '100%',
        maxWidth: '768px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: 'none',
        fontFamily: 'Roboto'
    }
};

class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <h2>My primary skillset</h2>
                    <h3>A blah blah on the blah blah way of Javascript blah blah React blah blah Angular arey wah blah blah too good ya</h3>
                    <Paper style={style.chartHolder}>
                        <Pie />
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <h2>My primary skillset</h2>
                    <h3>A blah blah on the blah blah way of Javascript blah blah React blah blah Angular arey wah blah blah too good ya</h3>
                    <Paper style={style.chartHolder}>
                        <Pie2 />
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <h2>My primary skillset</h2>
                    <h3>A blah blah on the blah blah way of Javascript blah blah React blah blah Angular arey wah blah blah too good ya</h3>
                    <Paper style={style.chartHolder}>
                        <Pie3 />
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <h2>My primary skillset</h2>
                    <h3>A blah blah on the blah blah way of Javascript blah blah React blah blah Angular arey wah blah blah too good ya</h3>
                    <Paper style={style.chartHolder}>
                        <Pie4 />
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Details;