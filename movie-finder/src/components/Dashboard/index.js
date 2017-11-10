import React, { Component } from 'react';
import LatestMovies from './LatestMovies';

class Dashboard extends Component {
    render() {
        return (
            <div>
                <LatestMovies />
            </div>
        );
    }
}

export default Dashboard;