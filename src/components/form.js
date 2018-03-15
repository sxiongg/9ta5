import React, { Component } from 'react';

import {connect} from 'react-redux'
import axios from 'axios'

import {filterResults} from '../redux/actions'
import {filterResultsByLocation} from '../redux/actions'

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            locationInput: '',
            keywordInput: '',
         }
    }
    
    render() { 
        // Form for filtering the API results
        return ( 
            <div className="search-input-field col-md-3">
                <div className="form-group">
                    <label htmlFor="location-input"> Location: </label>
                    <input onChange={(e) => { this.setState({ locationInput: e.target.value }) }} value={this.state.locationInput} placeholder="Irvine" id="location-input" className="form-control" type="text" />
                </div>

                <div className='form-group'>
                    <label htmlFor="keywordInput"> Keywords: </label>
                    <input onChange={(e) => { this.setState({ keywordInput: e.target.value }) }} value={this.state.keywordInput} placeholder="Javascript" id='keywordInput' className='form-control' type="text"/>
                </div>

                <div className="form-check">
                    <input type="checkbox" id="include-internships" onClick = { this.clickIncludeButton.bind(this)}/>
                    <label htmlFor="include-internships">Only Internships</label>
                </div>

                <div className="form-check">
                <input type="checkbox" id="exclude-internships" onClick = { this.clickExcludeButton.bind(this)}/>
                    <label htmlFor="exclude-internships">Exclude Internships</label>
                </div>
                {/* Click event */}
                <div className="submit-button">
                    <button onClick={this.filterApi.bind(this)} className="btn btn-primary btn-block">Search</button>
                </div>
            </div>
         )
    }

    clickIncludeButton (e) {
        document.getElementById('include-internships').setAttribute('checked' , 'true')
    }


    clickExcludeButton (e) {
        document.getElementById('exclude-internships').setAttribute('checked' , 'true')
    }
   

    // Function that does an axios api call with a new URL
    filterApi() {

        var internCheckbox = document.getElementById('include-internships').checked

        var excludeInternCheckbox = document.getElementById('exclude-internships').checked


        if (this.state.keywordInput.length > 3 && this.state.locationInput.length > 1) {
            axios.get('http://localhost:8080/api/jobs?title=' + this.state.keywordInput + '&location=' + this.state.locationInput)
            .then(response => {
                this.props.sendStateToRedux(response.data);
            });
        }
        else if (this.state.locationInput.length > 1 && internCheckbox) {
            axios.get('http://localhost:8080/api/jobs?title=intern' + '&location=' + this.state.locationInput)
            .then(response => {
                this.props.sendStateToRedux(response.data);
            });
        }
        else if (this.state.locationInput.length > 1 && excludeInternCheckbox) {
            axios.get('http://localhost:8080/api/jobs?location=' + this.state.locationInput)
            .then(response => {

                var nonInternships = []; 

                for (var i=0; i < response.data.length; i++){
                    if(response.data[i].jobTitle.toLowerCase().includes('intern') != true) {
                        nonInternships.push(response.data[i])
                    }
                }
                console.log (nonInternships);
                this.props.sendStateToRedux(nonInternships);
            }); 
        }
        else if (this.state.keywordInput.length > 3 && this.state.locationInput.length < 2) {
            axios.get('http://localhost:8080/api/jobs?title=' + this.state.keywordInput)
            .then(response => {
                this.props.sendStateToRedux(response.data);
            });
        }
        else if (this.state.keywordInput.length < 3 && this.state.locationInput.length > 1){
            axios.get('http://localhost:8080/api/jobs?location=' + this.state.locationInput)
            .then(response => {
                this.props.sendLocationToRedux(response.data);
            });
        }
        else if (internCheckbox) {
            axios.get('http://localhost:8080/api/jobs?title=intern')
            .then(response => {
                this.props.sendStateToRedux(response.data);
            }); 
        }
        else if (excludeInternCheckbox) {
            axios.get('http://localhost:8080/api/jobs')
            .then(response => {

                var nonInternships = []; 

                for (var i=0; i < response.data.length; i++){
                    if(response.data[i].jobTitle.toLowerCase().includes('intern') != true) {
                        nonInternships.push(response.data[i])
                    }
                }
                console.log (nonInternships);
                this.props.sendStateToRedux(nonInternships);
            }); 
        }
    }

}

const mapDispatchToProps = dispatch => {
    return {
        sendStateToRedux: apiResponse => dispatch(filterResults(apiResponse)),
        sendLocationToRedux: apiResponse => dispatch(filterResultsByLocation(apiResponse))
    }
}

export default connect(null, mapDispatchToProps)(SearchForm);