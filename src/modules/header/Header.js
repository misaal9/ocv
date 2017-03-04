import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Divider from 'material-ui/Divider';
import _ from 'lodash';

const style = {
    appBar: {
        //background: 'transparent',
        color: '#ccc'
    },
    indent: {
        paddingLeft: '40px'
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
            <div>
                <MenuItem>See All Sections Together</MenuItem>
                <MenuItem style={style.indent}>About Me</MenuItem>
                <MenuItem style={style.indent}>Projects</MenuItem>
                <MenuItem style={style.indent}>Past Work Experience</MenuItem>
                <MenuItem style={style.indent}>Primary Skillset</MenuItem>
                <MenuItem style={style.indent}>Secondary SkillSet</MenuItem>
                <MenuItem style={style.indent}>Others</MenuItem>
                <Divider />
                <MenuItem>About This Project</MenuItem>
                <MenuItem>Contact Me</MenuItem>
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