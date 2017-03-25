import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { Link} from 'react-router';
import _ from 'lodash';

const style = {
    appBar: {
        background: 'transparent',
        position: 'fixed',
        top: 0,
        color: '#ccc',
        boxShadow: 'none'
    },
    indent: {
        paddingLeft: '40px',
        color: '#333',
        fontFamily: 'Gloria Hallelujah',
        fontSize: '1.2em'
    },
    link: {
        textDecoration: 'none',
        fontFamily: 'Gloria Hallelujah',
        fontSize: '1em'
    },
    drawerContainer: {
        backgroundColor: 'none',
        boxShadow: 'none'
    },
    drawerHolder: {
        background: 'yellow',
        height: 'auto',
        borderRadius: '20% 40% 82%',
        color: '#000',
        width: '350px',
        paddingTop: '30px',
        paddingLeft: '20px',
        paddingBottom: '100px',
        overflow: 'hidden'
    },
    menuItem: {
        color: '#333',
        fontFamily: 'Gloria Hallelujah',
        fontSize: '1.2em'
    },
    indentedLinkMenuItem: {
        color: '#333',
        paddingLeft: '40px',
        fontFamily: 'Gloria Hallelujah',
        fontSize: '1.2em'
    }
};

class Header extends Component {
    constructor (props) {
        super(props);
        this.state = {
            drawerOpen: false
        }
    }
    
    handleDrawerToggle() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }
    
    renderMenuItems() {
        return (
            <div style={style.drawerHolder}>
                {/*eslint-disable react/jsx-no-duplicate-props*/}
                <Link style={style.link} to='/'><MenuItem style={style.menuItem}>Home Page</MenuItem></Link>
                <Link style={style.link} to='/about'><MenuItem style={style.menuItem} style={style.indent}>About Me</MenuItem></Link>
                <Link style={style.link} to='/projects'><MenuItem style={style.menuItem} style={style.indent}>Projects</MenuItem></Link>
                <Link style={style.link} to='/work'><MenuItem style={style.menuItem} style={style.indent}>Past Work Experience</MenuItem></Link>
                <Link style={style.link} to='/primSkills'><MenuItem style={style.indentedLinkMenuItem}>Primary SKills</MenuItem></Link>
                <Link style={style.link} to='/secSkills'><MenuItem style={style.indentedLinkMenuItem}>Secondary SKills</MenuItem></Link>
                <Link style={style.link} to='/next'><MenuItem style={style.menuItem} style={style.indent}>Anything else?</MenuItem></Link>
                <Link style={style.link} to='/this'><MenuItem style={style.menuItem}>About This Project</MenuItem></Link>
                <Link style={style.link} to='/contact'><MenuItem style={style.menuItem}>Contact Me</MenuItem></Link>
                {this.props.children}
            </div>
        );
    }

    render() {
        return (
            <div>
                <AppBar
                    style={style.appBar}
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonTouchTap={this.handleDrawerToggle.bind(this)}
                />
                <Drawer
                    width={400}
                    containerStyle={style.drawerContainer}
                    docked={false}
                    open={this.state.drawerOpen}
                    onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
                >
                    {this.renderMenuItems()}
                </Drawer>
            </div>
        );
    }
}

export default Header;