import React, { Component } from 'react';
import { Chart } from 'react-google-charts';

const style = {
    pie: {
        width: '100%',
        maxWidth: '768px',
        background: 'transparent'
    }
};

class Pie extends Component {
    render() {
        return (
            <Chart
                style={style.pie}
                chartType="PieChart"
                data={[
                    ['Task', 'Hours per Day'],
                    ['Work',     11],
                    ['Eat',      2],
                    ['Commute',  2],
                    ['Watch TV', 2],
                    ['Sleep',    7]]}
                options={{}}
                graph_id="pie4"
                width="100%"
                height="400px"
                legend_toggle
            />
        );
    }
}

export default Pie;