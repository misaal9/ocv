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

class PieUtility extends Component {
    render() {
        return (
            <Chart
                style={style.pie}
                chartType="PieChart"
                data={[
                    ['Utility Tools', 'Hours per Day'],
                    ['jQuery',     8],
                    ['Lodash',      7],
                    ['Underscore',  5],
                    ['ESLint', 5],
                    ['MomentJS',    2]]}
                options={options}
                graph_id="pieUtility"
                width="100%"
                height="400px"
                legend_toggle
            />
        );
    }
}

export default PieUtility;