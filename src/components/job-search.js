import React, { Component } from 'react'

class JobSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (

            <div id="content-container">
                <div className="row">

                    <div className="search-inputs-field col-md-3">
                        <div className="form-group">
                            <label htmlFor="location-input"> <h4>Location:</h4> </label>
                            <input id="location-input" className="form-control" type="text" />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="keywordInput"> <h4> Keywords: </h4> </label>
                            <input id='keywordInput' className='form-control' type="text"/>
                        </div>

                        <div className="form-check">
                            <input type="checkbox" id="include-internships"/>
                            <label htmlFor="include-internships">Only Internships</label>
                        </div>

                        <div className="form-check">
                        <input type="checkbox" id="exclude-internships"/>
                            <label htmlFor="exclude-internships">Exclude Internships</label>
                        </div>
                    </div>
                    

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