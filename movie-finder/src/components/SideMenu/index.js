import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {
    Link
} from 'react-router-dom';
import MenuItem from 'antd/lib/menu/MenuItem';
import * as NavMenus from './nav_menu.json';
const SubMenu = Menu.SubMenu;

class SideMenu extends Component {
    generateMenu = (menu) => {
        if(menu.hasOwnProperty('children')) {
        return <SubMenu key={`sub-${menu.id}`} title={<span><span><Icon type={menu.icon} /></span><span>{menu.title}</span></span>}>
            {menu.children.map(submenu => this.generateMenu(submenu))}
        </SubMenu>
        } else {
            return <Menu.Item key={menu.path}>
                <Link to={menu.path}>
                    {menu.icon && <Icon type={menu.icon} /> }
                    <span>{menu.title}</span>
                </Link>
            </Menu.Item>
        }
    }
    render() {
        let activeItem = this.props.activeItem?[this.props.activeItem]:[];
        return (
            <div>
                <Link to="/">
                    <div className="logo">MovieFinder</div>
                    <div className="small-logo">MF</div>
                </Link>
                <Menu theme="dark" mode="inline" selectedKeys={activeItem}>
                { NavMenus.map(menu => this.generateMenu(menu))}
                </Menu>
            </div>
        );
    }
}

export default SideMenu;