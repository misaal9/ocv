import React, { Component } from 'react';
import Header from '../../modules/header/Header';
import Paper from 'material-ui/Paper';
import {Card, CardMedia, CardText, CardActions, CardTitle} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const img = {
    p1: require('../../../img/proj1.png'),
    p2: require('../../../img/proj2.png'),
    p3: require('../../../img/proj3.png'),
    p4: 'https://image.flaticon.com/icons/png/512/25/25231.png',
    p5: 'https://cdn.worldvectorlogo.com/logos/github.svg'
}

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
    blue: {
        color: 'blue'
    },
    imgHolder: {
        textAlign: 'center'
    },
    imgp4: {
        maxWidth: '70%',
        minWidth: '70%',
        padding: '30px'
    }
};
class Intro extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <Card>
                            <CardMedia>
                                <img src={img.p1} role='presentation'/>
                            </CardMedia>
                                <CardTitle title="Wedding Invitation Website" subtitle="https://rohitandmadhura.com" />
                            <CardText>
                                This wedding website was made using <span style={style.blue}>KnockoutJS</span> and <span style={style.blue}>DurandalJS</span> and is currently live. The site has a go-to-map which allows user to locate venue through your maps directly. It leverages basic CSS to implement a night mode feature.
                            </CardText>
                            <CardActions>
                                <RaisedButton primary={true} href="https://rohitandmadhura.com" target="_blank" label="Visit page in new tab" />
                            </CardActions>
                        </Card>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <Card>
                            <CardMedia>
                                <img src={img.p2} role='presentation'/>
                            </CardMedia>
                                <CardTitle title="Travel Planner And Collaborator" subtitle="https://misaal9.github.io/react-planner" />
                            <CardText>
                                This application is made using <span style={style.blue}>ReactJS</span> (for a clean, crisp UI) and <span style={style.blue}>Firebase</span> (to store data, Google authentication). This app is targeted for a group that is trying to plan a trip together by collaborating ideas, locations and communication. This project is currently work in progress.
                            </CardText>
                            <CardActions>
                                <RaisedButton primary={true} href="https://misaal9.github.io/react-planner" target="_blank" label="Visit page in new tab" />
                            </CardActions>
                        </Card>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <Card>
                            <CardMedia>
                                <img src={img.p3} role='presentation'/>
                            </CardMedia>
                                <CardTitle title="Online Resume" subtitle="https://misaal9.github.io/react-charts" />
                            <CardText>
                                This project uses <span style={style.blue}>ReactJS</span> and <span style={style.blue}>Google Charts</span> to render graphs and provide visual information for a candidate's resume. This is the project you are viewing right now.
                            </CardText>
                            <CardActions>
                                <RaisedButton primary={true} href="https://misaal9.github.io/react-charts" target="_blank" label="Visit page in new tab" />
                            </CardActions>
                        </Card>
                    </Paper>
                </Paper>
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <Card>
                            <CardMedia style={style.imgHolder}>
                                <img src={img.p5} style={style.imgp4} role='presentation'/>
                            </CardMedia>
                                <CardTitle title="Misc Projects On Github" subtitle="https://github.com/misaal9" />
                            <CardText>
                                You can also visit my <span style={style.blue}>Github</span> account, where I consistently add new code when I'm trying out new standards and frameworks. Some projects are still work in progress, though.
                            </CardText>
                            <CardActions>
                                <RaisedButton primary={true} href="https://github.com/misaal9" target="_blank" label="Visit page in new tab" />
                            </CardActions>
                        </Card>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Intro;