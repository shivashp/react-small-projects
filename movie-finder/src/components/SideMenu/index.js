import React, { Component } from 'react';
import { Menu, Icon } from 'antd';
import {
    Link
} from 'react-router-dom';
import * as NavMenus from './nav_menu.json';

const SubMenu = Menu.SubMenu;
// TODO: Generate routes dynamically based on json file

class SideMenu extends Component {
    createMenu = (menu) => {
        if(menu.hasOwnProperty('children')) {
        return <SubMenu key={`sub-${menu.id}`} title={<span><span><Icon type={menu.icon} /></span><span>{menu.title}</span></span>}>
            {menu.children.map(submenu => this.createMenu(submenu))}
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
    generateMenu = (menuObj) => menuObj.map(menu =>  this.createMenu(menu));
    // createRoute = (menu) => {
    //    return menu.hasOwnProperty('children')?
    //     menu.children.map(submenu => this.createRoute(submenu)):
    //     <Route path={menu.path} component={menu.title.trim()} />
    // }
    render() {
        let activeItem = this.props.activeItem?[this.props.activeItem]:["/"];
        return (
            <div>
                <Link to="/">
                    <div className="logo">MovieFinder</div>
                    <div className="small-logo">MF</div>
                </Link>
                <Menu theme="dark" mode="inline" selectedKeys={activeItem}>
                {this.generateMenu(NavMenus)}
                </Menu>
            </div>
        );
    }
}

export default SideMenu;