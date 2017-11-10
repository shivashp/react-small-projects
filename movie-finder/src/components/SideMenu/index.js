import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {
    Link
} from 'react-router-dom';


class SideMenu extends Component {
    render() {
        let activeItem = this.props.activeItem?[this.props.activeItem]:[];
        return (
            <div>
                <Link to="/">
                    <div className="logo">MovieFinder</div>
                    <div className="small-logo">MF</div>
                </Link>
                <Menu theme="dark" mode="inline" selectedKeys={activeItem}>
                <Menu.Item key="/">
                    <Link to="/">
                        <Icon type="home" />
                        <span>Dashboard</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/popular">
                    <Link to="/popular">
                        <Icon type="user" />
                        <span>Popular Movies</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/latest">
                    <Link to="/latest">
                        <Icon type="video-camera" />
                        <span>Latest Movies</span>
                    </Link>
                </Menu.Item>
                <Menu.Item key="/top-rated">
                    <Link to="/top-rated">
                        <Icon type="upload" />
                        <span>Top Rated</span>
                    </Link>
                </Menu.Item>
                </Menu>
            </div>
        );
    }
}

export default SideMenu;