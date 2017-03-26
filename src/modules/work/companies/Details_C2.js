import React, { Component } from 'react';
import Header from '../../../modules/header/Header';
import Paper from 'material-ui/Paper';
import Chip from 'material-ui/Chip';
import { Link} from 'react-router';
import {yellow400} from 'material-ui/styles/colors';

const style = {
    paperMain: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'space-around',
        padding: '20px',
        width: '100vw'
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
    }
};
class Details extends Component {
    render() {
        return (
            <div>
                <Header />
                <Paper style={style.paperMain}>
                    <Paper style={style.paper}>
                        <h2 style={style.title}>SNS Technologies (now ForgeAhead)</h2>

                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            CK-12 Foundation | <Link style={style.link} to="http://www.ck12.org/student/" target="_blank">www.ck12.org</Link>
                            <h3 style={style.projectH3}>Description</h3>
                            CK-12 Foundation provides a library of free online textbooks, videos, exercises, flashcards, and real world applications for over 5000 concepts from arithmetic to students.
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>Create annotator plugin to allow students to highlight, and add notes to selected text.</li>
                                    <li>Overall design and implementation.</li>
                                    <li>Bug fixes and support.</li>
                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip backgroundColor={yellow400}>jQuery Plugin</Chip> &nbsp; <Chip backgroundColor={yellow400}>Javascript</Chip>
                            </div>
                        </Paper>
        
                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            Appraisal App, Internal Project
                            <h3 style={style.projectH3}>Description</h3>
                            The appraisal app is meant to facilitate and ease the annual appraisal process where in the user gets to assign forms, fill forms, review, calculate and assign ratings through a system.
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>Create user maps and journeys, wireframes and mockups for proposed system.</li>
                                    <li>Implement interface design and development using Angular JS, Angular UI, Bootstrap.</li>
                                    <li>Additionally, used Require JS and Gulp JS to add structure and automate development tasks. </li>
                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip backgroundColor={yellow400}>AngularJS</Chip> &nbsp; <Chip backgroundColor={yellow400}>Bootstrap</Chip>
                            </div>
                        </Paper>
        
                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            NoodleTools Web App Redesign | <Link style={style.link} to="http://www.noodletools.com/" target="_blank">www.noodletools.com</Link>
                            <h3 style={style.projectH3}>Description</h3>
                            NoodleTools is a web-based student research service that helps you correctly cite sources in MLA, APA, and Chicago/Turabian citation styles. Our requirement was to redesign and upgrade existing layout to latest web standards, enhance and add new features and make the application responsive to be accessed across multiple devices.
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>Requirement gathering, user journeys, wireframes and mockups using Balsamiq, Photoshop to propose and sell new design concepts and features, considering all factors such as responsiveness, usability, accessibility, iPad friendliness, etc.</li>
                                    <li>Design and develop modern UI using Bootstrap, Backbone, Underscore, jQuery.</li>
                                    <li>Integration of APIs to add functionality.</li>
                                    <li>Testing and bug fixes.</li>

                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip backgroundColor={yellow400}>BackboneJS</Chip> &nbsp; <Chip backgroundColor={yellow400}>jQuery</Chip> &nbsp; <Chip backgroundColor={yellow400}>Python</Chip> &nbsp; <Chip backgroundColor={yellow400}>MySQL</Chip>
                            </div>
                        </Paper>
        
                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            Tritium
                            <h3 style={style.projectH3}>Description</h3>
                            Worked as a UI/ UX consultant for a short period, providing useful UX ideas using flow charts and mockups. I was not involved in any coding on this project.
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>Worked for short duration to provide valuable inputs, help in restructuring, add responsiveness to web interface.</li>
                                    <li>Propose new designs and UI using mockups to enhance usability.</li>
                                    <li>Created POC, using Bootstrap, Chart JS, D3 JS, as per requirements shared by client.</li>
                                    <li>Bug fixes.</li>

                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip backgroundColor={yellow400}>Balsamiq</Chip> &nbsp; <Chip backgroundColor={yellow400}>Photoshop</Chip>
                            </div>
                        </Paper>
        
                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            Troux Nav
                            <h3 style={style.projectH3}>Description</h3>
                            Trouv Nav uses BIRT application to provide large volumes of data and report statistic to its corporate clients. Since the existing BIRT was originally meant to work for legacy browsers, our requirement was to ensure the application is compatible with modern browsers as well.
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>Worked for short duration to help upgrade existing BIRT application to provide compatibility and support for latest desktop web browsers.</li>
                                    <li>Modified code to continue support for legacy browsers (IE6,7,8) as well as be compatible with modern browsers.</li>
                                    <li>Bug fixes.</li>

                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip backgroundColor={yellow400}>BIRT</Chip> &nbsp; <Chip backgroundColor={yellow400}>jQuery</Chip>
                            </div>
                        </Paper>
        
                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            NoodleTools Companion (Mobile UI Design) | <Link style={style.link} to="http://www.noodletools.com/" target="_blank">www.noodletools.com</Link>
                            <h3 style={style.projectH3}>Description</h3>
                            Noodletools Companion is the mobile app version of the NoodleTools website. Our requirement was to design and develop the application from scratch, to help users connect with NoodleTools on the go
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>Requirement gathering and analysis from client.</li>
                                    <li>Propose new designs and UI using mockups for mobile devices.</li>
                                    <li>Implement and develop the UI into active, working application.</li>
                                    <li>Bug fixes and closure.</li>

                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip backgroundColor={yellow400}>Android Studio</Chip> &nbsp; <Chip backgroundColor={yellow400}>XCode</Chip> &nbsp; <Chip backgroundColor={yellow400}>Balsamiq</Chip> &nbsp; <Chip backgroundColor={yellow400}>Photoshop</Chip> &nbsp; <Chip backgroundColor={yellow400}>Javascript</Chip>
                            </div>
                        </Paper>
                    
                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            Medsolis | <Link style={style.link} to="http://www.medsolis.com/" target="_blank">www.medsolis.com</Link>
                            <h3 style={style.projectH3}>Description</h3>
                            Medsolis is a healthcare application that allows doctors, nurses and patients to interact with each other, share and report critical health statistics via a system.
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>Extensive requirement gathering and analysis to understand client requirements. </li>
                                    <li>Design and develop application using new tools and frameworks, to be responsive and iPad friendly.</li>
                                    <li>Bug fixes.</li>

                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip backgroundColor={yellow400}>Javascript</Chip> &nbsp; <Chip backgroundColor={yellow400}>HTML</Chip> &nbsp; <Chip backgroundColor={yellow400}>CSS</Chip> &nbsp; <Chip backgroundColor={yellow400}>jQuery</Chip>
                            </div>
                        </Paper>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Details;