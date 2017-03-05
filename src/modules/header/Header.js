import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
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
        color: '#fff'
    },
    link: {
        textDecoration: 'none'
    },
    drawer: {
        background: '#000',
        height: '100%',
        borderRight: '2px dashed yellow'
    },
    menuItem: {
        color: '#fff'
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
            <div style={style.drawer}>
                <Link style={style.link} to='/details'><MenuItem style={style.menuItem}>See All Sections Together</MenuItem></Link>
                <MenuItem style={style.menuItem} style={style.indent}>About Me</MenuItem>
                <MenuItem style={style.menuItem} style={style.indent}>Projects</MenuItem>
                <MenuItem style={style.menuItem} style={style.indent}>Past Work Experience</MenuItem>
                <MenuItem style={style.menuItem} style={style.indent}>Primary Skillset</MenuItem>
                <MenuItem style={style.menuItem} style={style.indent}>Secondary SkillSet</MenuItem>
                <MenuItem style={style.menuItem} style={style.indent}>Others</MenuItem>
                <Divider />
                <MenuItem style={style.menuItem}>About This Project</MenuItem>
                <MenuItem style={style.menuItem}>Contact Me</MenuItem>
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