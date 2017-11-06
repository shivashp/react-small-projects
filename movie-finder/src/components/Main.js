import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import {
    Switch, Route
} from 'react-router-dom';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';

const { Header, Sider, Content } = Layout;

class Main extends Component {
    state = {
        collapsed: false,
      };
      toggle = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      }
    render() {
    return (
        <div id="main-app">
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>   
                    <SideMenu activeItem={this.props.location.pathname} />
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0}}>
                    <Icon
                        className="trigger"
                        style={{fontSize: 17, verticalAlign: 'super'}}
                        type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                        onClick={this.toggle}
                    />
                    </Header>
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: '90vh' }}>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path={`/popular`} component={Popular} />
                            <Route path={`/latest`} component={Latest} />
                            <Route path={`/top-rated`} component={TopRated} />
                        </Switch>                
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
    }
}

const Popular = () => (
    <h2>This is popular movie list</h2>
)
const Latest = () => (
    <h2>This is latest movie list</h2>
)
const TopRated =() => (
    <h2>This is top rated movie list</h2>
)

export default Main;