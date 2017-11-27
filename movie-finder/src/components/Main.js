import React, { Component } from 'react';
import { Layout, Icon } from 'antd';
import {
    Switch, Route
} from 'react-router-dom';
import SideMenu from './SideMenu';
import Dashboard from './Dashboard';
import FullCategoryPage from './FullCategoryPage';
import SingleMovie from './SingleMovie';

const { Header, Sider, Content } = Layout;

class Main extends Component {
    state = {
        collapsed: true,
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
                    <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', height: '90vh', overflow: 'scroll' }}>
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route path={`/upcoming`} component={Upcoming} />
                            <Route path={`/popular`} component={FullCategoryPage} />
                            <Route path={`/top-rated`} component={TopRated} />
                            <Route path={'/single-movie/:id'} component={SingleMovie} />
                        </Switch>                
                    </Content>
                </Layout>
            </Layout>
        </div>
    );
    }
}



const TopRated =() => (
    <h2>This is top rated movie list</h2>
)

const Upcoming = () => (
    <h2>Upcoming movie</h2>
)


export default Main;