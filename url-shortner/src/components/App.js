import React, { Component } from 'react';
import {shortenUrl} from '../config';

class App extends Component {
    constructor() {
        super();
        this.state = {
            originalUrl: '',
            shortUrl: '',
            errmsg: ''
        }
    }
    _onButtonClick = () => {
        shortenUrl(this.state.originalUrl).then(shortUrl => this.setState({shortUrl, errmsg: ''}))
        .catch(err => this.setState({errmsg: err.error.message, shortUrl: ''}))
    }
    render() {
        return (
            <div className="app">
                <h1>URL Shortner </h1>
                <hr />
                <br />
                <p style={{color: 'red'}}>{this.state.errmsg}</p>
                <br />
                <h3>Long Url: </h3>
                <input type="text" name="originalUrl" onChange={(e) => this.setState({originalUrl: e.target.value})} placeholder="Type your url here..."/>
                <button type="button" onClick ={this._onButtonClick}>Shorten URL </button>
                {
                    this.state.shortUrl.length > 0 && 
                    <div>
                        <h3>Short Url: </h3>
                        <input type="text" name="shortUrl" disabled="true" value={this.state.shortUrl} style={{width:472}}/>
                    </div>
                }
            </div>
        );
    }
}

export default App;