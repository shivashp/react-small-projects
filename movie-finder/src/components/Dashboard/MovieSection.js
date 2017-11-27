import React, { Component } from 'react';
import { Row, Col, Card, Icon, Rate } from 'antd';
import Slider from 'react-slick';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Loader } from '../utils';

// TODO: cursor pointer
// TODO: Responsive Carousel

class MovieSection extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
        }
    }
    _seeall = () => {
        this.props.history.push(`/${this.props.api}`);
    }
    componentDidMount() {
        this.get_movie();
    }
    get_movie = () => {
        axios({
            method: "GET",
            url: `https://api.themoviedb.org/3/movie/${this.props.api}?api_key=469f016ce8cea2bc3e160d47b66e91d9&language=en-US&page=1`
        })
        .then(response => {
            let movies = response.data.results.map(movie => {
                return {
                    ...movie, 
                    backdrop_path: `http://image.tmdb.org/t/p/w342${movie.poster_path}`,
                    vote_average: (movie.vote_average/10) * 5
                }
            });    
            this.setState({movies});
        })
    }
    render() {
        
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 2,
            arrows: true,
            nextArrow: <NextArrow />,
            prevArrow: <PrevArrow />
          };
        return (
            <div id="latest-movies">
                <div className="section-title">
                    <Row type="flex" justify="space-between">
                        <Col span={8}>
                            <h2>{this.props.title}</h2>
                        </Col>
                        <Col span={2}>
                            <div 
                                className="see-all"
                                onClick={this._seeall}
                            >
                                view all
                            </div>
                        </Col>
                    </Row>
                </div>
                {
                    this.state.movies.length > 0 ?
                    <Slider {...settings} className="section-body">
                    {
                        this.state.movies.map(movie => (
                            <Link to={`/single-movie/${movie.id}`} key={movie.id}>
                                <Card className="animated fadeIn" style={{width: 250, marginRight: 20, marginBottom: 50}} bodyStyle={{ padding: 0 }}>
                                    <div className="mycard-image">
                                        <img alt="example" width="100%" src={movie.backdrop_path} />
                                        <div className="mycard-title">
                                            <h3>{movie.original_title}</h3>
                                            <Rate disabled allowHalf defaultValue={movie.vote_average} />
                                        </div>
                                    </div>
                                </Card>
                            </Link>
                        ))
                    }
                    </Slider> : <Loader />
                }
                
            </div>
        );
    }
}


const NextArrow = (props) => (
    <div className="arrow arrow-right" onClick={props.onClick}>
        <Icon type="right-circle"/>
    </div>
)

const PrevArrow = (props) => (
    <div className="arrow arrow-left" onClick={props.onClick}>
        <Icon type="left-circle"/>
    </div>
)
export default MovieSection;