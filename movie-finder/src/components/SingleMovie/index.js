import React, { Component } from 'react';
import { Loader } from '../utils';
import { Row, Col, Rate } from 'antd';
import axios from 'axios';

class SingleMovie extends Component {
    constructor() {
        super();
        this.state = {
            loading: true
        }
    }
    componentWillMount() {
        const { id } = this.props.match.params;
        this._getMovie(id);
    }
    _getMovie = (id) => {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${id}?api_key=469f016ce8cea2bc3e160d47b66e91d9&language=en-US&page=1`
        }).then(response => {
            let movie = response.data;
            movie.backdrop_path = `http://image.tmdb.org/t/p/w342${movie.backdrop_path}`;
            movie.poster_path = `http://image.tmdb.org/t/p/w500${movie.poster_path}`;
            this.setState({movie, loading: false});
        })
    }
    render() {
        let { movie, loading } = this.state;
        if(loading) 
            return <Loader />
        movie.vote_average = (movie.vote_average/10) * 5;
        return (
            <div id="single-movie" className="animated fadeIn">
                <Row>
                    <Col span={8}>
                        <img src={movie.poster_path} className="poster" alt={movie.title}/>
                    </Col>
                    <Col span={16}>
                        <div className="section-title">
                            <Row type="flex" justify="space-between">
                                <Col span={18}>
                                    <h2>{movie.title}</h2>
                                    <p className="small-text">{movie.tagline}</p>
                                </Col>
                                <Col span={6} style={{textAlign: 'right'}}>
                                    <Rate disabled allowHalf defaultValue={movie.vote_average} /><br />
                                    <p className="small-text" style={{fontSize: '0.7em', marginRight: 10}}><b>Total Votes:</b> {movie.vote_count}</p>
                                </Col>
                            </Row>
                        </div>
                        <div className="movie-meta">
                            <span id="date"><b>Release Date:</b> {movie.release_date}</span>
                            <span id="runtime"><b>Movie Length:</b> {movie.runtime} mins</span>
                            <span id="tags"><b>Genre:</b> {movie.genres.map(genre => genre.name).join(', ')}</span>
                        </div>
                        <div className="section-body" style={{marginTop:40}}>
                            <p>{movie.overview}</p>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default SingleMovie;