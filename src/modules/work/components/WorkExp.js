import React, {Component} from 'react';
import {Card, CardHeader, CardMedia, CardText, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Toggle from 'material-ui/Toggle';

const tataLogo = 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b1/Tata_Consultancy_Services_Logo.svg/1280px-Tata_Consultancy_Services_Logo.svg.png';

const style = {
    wrapper: {
        maxWidth: 768,
        background: 'transparent'
    },
    img: {
        width: '50%',
        padding: '30px',
        minWidth: 'auto'
    },
    cardMedia: {
        textAlign: 'center'
    },
    text: {
        lineHeight: '1.4em'
    },
    titles: {
        textAlign: 'center'
    }
}
class WorkExp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            openTcs: false
        }
    }

    handleExpandChange = (expanded) => {
        this.setState({openTcs: expanded});
    };

    handleToggle = (event, toggle) => {
        this.setState({openTcs: toggle});
    };

    handleExpand = () => {
        this.setState({openTcs: true});
    };

    handleReduce = () => {
        this.setState({openTcs: false});
    };

    render() {
        return (
            <div>
                <Card style={style.card} expanded={this.state.openSns} onExpandChange={this.handleExpandChange}>
                    <CardHeader showExpandableButton={true} actAsExpander={true} />
                    <CardMedia style={style.cardMedia}>
                        <img style={style.img} src={tataLogo} />
                    </CardMedia>
                    <CardTitle style={style.titles} title="Tata Consultancy Services" subtitle="2009 - 2013 (~4 years)" />
                    <CardText style={style.text} expandable={true}>
                        Tata Consultancy Servies, or TCS, marked the beginning of my career. My initial days kept me busy with Java, however I soon began pursuing JavaScript related web developement roles.
                    </CardText>
                    <CardActions expandable={true}>
                        <RaisedButton primary={true} fullWidth={true} label="Show Project Details" />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default WorkExp;