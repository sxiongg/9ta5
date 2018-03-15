import React, { Component } from 'react';

import {connect} from 'react-redux'
import axios from 'axios'

import {filterResults} from '../redux/actions'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            locationInput: '',
            keywordInput: ''
         }
    }
    render() { 
        // Form for filtering the API results
        return ( 
            <div className="search-input-field col-md-3">
                <div className="form-group">
                    <label htmlFor="location-input"> Location: </label>
                    <input value={this.state.locationInput} placeholder="Irvine" id="location-input" className="form-control" type="text" />
                </div>

                <div className='form-group'>
                    <label htmlFor="keywordInput"> Keywords: </label>
                    <input onChange={(e) => { this.setState({ keywordInput: e.target.value }) }} value={this.state.keywordInput} placeholder="Javascript" id='keywordInput' className='form-control' type="text"/>
                </div>

                <div className="form-check">
                    <input type="checkbox" id="include-internships"/>
                    <label htmlFor="include-internships">Only Internships</label>
                </div>

                <div className="form-check">
                <input type="checkbox" id="exclude-internships"/>
                    <label htmlFor="exclude-internships">Exclude Internships</label>
                </div>
                {/* Click event */}
                <div className="submit-button">
                    <button onClick={this.filterApi.bind(this)} className="btn btn-primary btn-block">Search</button>
                </div>
            </div>
         )
    }
    // Function that does an axios api call with a new URL
    filterApi() {
        axios.get('http://localhost:8080/api/jobs?title=' + this.state.keywordInput)
            .then(response => {
                this.props.sendStateToRedux(response.data);
            });
    }
    
}



const mapDispatchToProps = dispatch => {
    return {
        sendStateToRedux: apiResponse => dispatch(filterResults(apiResponse))
    }
}

export default connect(null, mapDispatchToProps)(SearchForm);