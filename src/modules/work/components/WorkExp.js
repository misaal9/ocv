import React, {Component} from 'react';
import {Card, CardHeader, CardMedia, CardText, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

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
        textAlign: 'center',
        fontFamily: '"Gloria Hallelujah"',
        fontSize: '2em'
    }
}

const label = 'Show Project Details';

class WorkExp extends Component {
    render() {
        return (
            <div>
                <Card style={style.card}>
                    <CardHeader />
                    <CardMedia style={style.cardMedia}>
                        <img role="presentation" style={style.img} src={this.props.imgLogo} />
                    </CardMedia>
                    <CardTitle style={style.titles} title={this.props.title} subtitle={this.props.subtitle} />
                    <CardText style={style.text}>
                        {this.props.content}
                    </CardText>
                    <CardActions>
                        <RaisedButton href={this.props.href} primary={true} fullWidth={true} label={label} />
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default WorkExp;