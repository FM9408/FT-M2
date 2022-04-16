import React from 'react';
import { connect } from 'react-redux';
import { getMovieDetail } from '../../actions/index';

import './Movie.css';

class Movie extends React.Component {
    constructor(props) {
        super(props)

    }
    
    componentDidMount()  {
        this.props.getMovieDetail(this.props.match.params.id)
    }

    render() {
        return (
            <div className="movie-detail">
                <div>
                    <h1>{this.props.detail.Title}</h1>
                </div>
                <div>
                    <img src={this.props.detail.Poster}/>
                </div>
            </div>
        );
    }
}


function mapStateToParams(state) {
    console.log(state.movieDetail)
    return {
        detail: state.movieDetail
    }
}


export default connect(mapStateToParams,{getMovieDetail})(Movie);