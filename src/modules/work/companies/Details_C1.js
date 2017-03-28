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
    },
    projectNotUi: {
        padding: '10px',
        width: '90vw',
        maxWidth: '768px',
        marginTop: '30px',
        marginLeft: '-20px',
        background: 'lightyellow'
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
                        <h2 style={style.title}>Tata Consultancy Services</h2>

                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            Airplay Webpages; Bang And Olufsen (BnO)
                            <h3 style={style.projectH3}>Description</h3>
                            BnO is a well known manufacturer of a complete line of audio and video products. Simply put, our requirement was to design/ enhance interfaces so users can interact with their audio/ video devices over a secure wireless network, on their iDevices.
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>Upgrade existing web pages with interactivity and features using Jquery, Ajax, XML as per client requirements, to be incorporated in embedded systems.</li>
                                    <li>Team management responsibility. To mentor a team of 3-5 members during project.</li>
                                    <li>Extensive client interaction on a daily basis, for understanding and assessment of requirements, discussing and negotiating issues and complexities, via call or WebEx conferences.</li>
                                    <li>Timely resolution of minor and major bugs. Making weekly releases with new fixes.</li>

                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip style={style.chipItem} backgroundColor={yellow400}>jQuery Plugin</Chip> &nbsp; 
                                <Chip style={style.chipItem} backgroundColor={yellow400}>Javascript</Chip> &nbsp;
                                <Chip style={style.chipItem} backgroundColor={yellow400}>HTML</Chip> &nbsp;
                                <Chip style={style.chipItem} backgroundColor={yellow400}>CSS</Chip> &nbsp;
                                <Chip style={style.chipItem} backgroundColor={yellow400}>Flash devices</Chip> &nbsp;
                            </div>
                        </Paper>
        
                        <Paper style={style.project}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            Samsung Mobile Explorer, SET Campaigns; Microsoft
                            <h3 style={style.projectH3}>Description</h3>
                            These Microsoft campaigns were largely involved in online advertisements and event sponsorship for major brands. Our role was to provide media and content using predefined templates, and ensuring these pages run well across multiple devices.
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>To provide .NET based web solutions using ASP.NET and ADO.NET (for DB interaction) in C#.</li>
                                    <li>Use of internal media management tools (Media Manager), which provide REST Based API, for interacting with SQL DB, allowing user to upload videos, images with comments and description, and validating the same (handled by Media Manager largely).</li>
                                    <li>Use of XHTML, HTML5 for web page structure and building; Javascript, jQuery for client side scripting; CSS for styling.</li>
                                    <li>Used InfoPath to create, and structure electronic forms.</li>

                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                <Chip style={style.chipItem} backgroundColor={yellow400}>.Net</Chip> &nbsp; 
                                <Chip style={style.chipItem} backgroundColor={yellow400}>C#</Chip> &nbsp;
                                <Chip style={style.chipItem} backgroundColor={yellow400}>XHTML</Chip> &nbsp;
                                <Chip style={style.chipItem} backgroundColor={yellow400}>InfoPath</Chip> &nbsp;
                                <Chip style={style.chipItem} backgroundColor={yellow400}>TFS</Chip> &nbsp;
                                <Chip style={style.chipItem} backgroundColor={yellow400}>Javascript</Chip> &nbsp;
                            </div>
                        </Paper>
        
                        <Paper style={style.projectNotUi}>
                            <h3 style={style.projectH3}>Project, Client</h3>
                            UPSS Team, Monitoring And Support; Vodafone India
                            <h3 style={style.projectH3}>Description</h3>
                            Vodafone India UPSS team were involved in circle based migrations and updates. Our primary task was to aid monitor and provide support. This project required us to work in shifts. 
                            <h3 style={style.projectH3}>Roles & Responsibilities</h3>
                            <ul>
                                    <li>To work in shifts, provide monitoring and support to Vodafone UPSS systems</li>
                                    <li>Help in migrations and rollouts for new circles.</li>
                                    <li>Use batch file to automate scripts to run schedulers, repeating tasks.</li>
                            </ul>
                            <h3 style={style.projectH3}>Technology Stack</h3>
                            <div style={style.chipWrapper}>
                                This project was not related to UI.
                            </div>
                        </Paper>
                    </Paper>
                </Paper>
            </div>
        );
    }
}

export default Details;