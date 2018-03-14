import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'

import { APILoad } from '../redux/actions'

import SearchForm from './form'
import SearchResults from './search-results'

class JobSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/jobs')
            .then(response => {
                console.log('api loaded successfully');

                let apiResponse = response.data;
                console.log(apiResponse);
                
                this.props.sendAPIToRedux(apiResponse);

            })
    }

    render() {
        return (

            <div id="content-container">
                <div className="row">

                    <SearchForm />

                    <SearchResults />

                </div>

            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendAPIToRedux: apiResponse => dispatch(APILoad(apiResponse))
    }
}

export default connect(null, mapDispatchToProps)(JobSearch);