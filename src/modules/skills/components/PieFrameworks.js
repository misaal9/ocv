import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

const style = {
    pie: {
        width: '100%',
        maxWidth: '768px',
        background: 'transparent'
    }
};

const options = {
    width: '100%',
    height: 440,
    chartArea: {
        left: 'auto',
        top: 0,
        width: '80%',
        height: '80%'
    },
    backgroundColor: 'none',
    legend : {
        position: 'none',
        textStyle: { 
            color: 'blue',
            fontName: 'Roboto'
        }
    }
};

class PieFrameworks extends Component {
    render() {
        return (
            <Chart
                style={style.pie}
                chartType="PieChart"
                data={[
                    ['Framework', 'Hours per Day'],
                    ['AngularJs',     7],
                    ['DurandalJS',      7],
                    ['React',  5],
                    ['KnockoutJS', 6],
                    ['BackboneJS',    2]]}
                options={options}
                graph_id="pieFrameworks"
                width="100%"
                height="400px"
                legend_toggle
            />
        );
    }
}

export default PieFrameworks;