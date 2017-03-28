import React, { Component } from 'react';
import Header from '../../../modules/header/Header';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import {yellow400} from 'material-ui/styles/colors';

const style = {
    paperMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'space-around',
        padding: '20px',
        width: '100vw',
        boxShadow: 'none'
    },
    paper: {
        display: 'flex',
        background: 'none',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        maxWidth: '768px',
        margin: '0 auto',
        padding: '20px',
        boxShadow: 'none',
        fontFamily: 'Roboto'
    },
    title: {
        textAlign: 'center',
        fontFamily: '"Gloria Hallelujah"',
        fontSize: '2em'
    },
    subTitle: {
        color: '#ccc'
    },
    project: {
        padding: '10px',
        width: '90vw',
        maxWidth: '768px',
        marginTop: '30px',
        marginLeft: '-20px'
    },
    chipWrapper: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    projectH3: {
        color: '#2196F3',
        marginBottom: '10px'
    },
    link: {
        color: '#ccc',
        textDecoration: 'none'
    },
    icon: {
        fill: '#ccc',
        height: '1em'
    },
    chipItem: {
        marginBottom: '5px'
    }
};
class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <h2 style={style.title}>Quinstreet Software Pvt Ltd</h2>

                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            Quinstreet Media Platform (QMP)
                            <h3 style={style.projectH3}>Description</h3>
                            Built and maintained the frontend for QuinStreet’s Media Platform as a Single Page App.
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>Built components on front end using Durandal, Knockout, JQuery Lodash, HTML5, SCSS and other modern frontend frameworks. </li>
                                    <li>Worked with Durandal routes, services, controllers, models and view/viewModels to relay backend data and render the frontend through MVC, MVVM, Service and other JS patterns.</li>
                                    <li>Used ES6 Promises with DWR service to communicate with a Java backend to retrieve data, as well as the Tableau API for data visualization, user analytics, and manage important business functionality through the product.</li>
                                    <li>Improved the frontend build process using a combination of Node/Gulp.</li>

                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip style={style.chipItem} backgroundColor={yellow400}>DurandalJS</Chip> &nbsp; <Chip style={style.chipItem} backgroundColor={yellow400}>KnockoutJS</Chip> &nbsp; <Chip style={style.chipItem} backgroundColor={yellow400}>GulpJS</Chip>
                                &nbsp; <Chip style={style.chipItem} backgroundColor={yellow400}>SCSS</Chip> &nbsp; <Chip style={style.chipItem} backgroundColor={yellow400}>Lodash</Chip>
                            </div>
                        </Paper>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Details;