import React, { Component } from 'react'
import SearchForm from './form';

class JobSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div id="content-container">
                <div className="row">

                    <SearchForm />
                    
                    <div className="search-results-field col-md-9">
                        <div className="row">
                            <div className="col-md-6">
                                <h5>Position</h5>
                            </div>
                            <div className="col-md-4">
                                <h5>Company</h5>
                            </div>
                            <div className="col-md-2">
                                <h5>Location</h5>
                            </div>
                        </div>
                        {/* RENDER RESULTS HERE */}
                    </div>

                </div>

            </div>
                )
           }
       }
        
export default JobSearch;