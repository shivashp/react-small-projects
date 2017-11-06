import React, { Component } from 'react';
import MovieSection from './MovieSection';
import * as sectionList from './dashboardSection.json';

class Dashboard extends Component {
    render() {
        return (
            <div>
                {
                    sectionList.map(section => {
                        return <MovieSection key={section.id} title={section.title} api={section.api} {...this.props} />
                    })
                }
            </div>
        );
    }
}

export default Dashboard;