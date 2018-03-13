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

                    <div className="col-md-3">
                        <div className="form-group">
                            <label htmlFor="location-input"> Location: </label>
                            <input id="location-input" className="form-control" type="text" />
                        </div>

                        {/* <div className='form-group col-md-3'>
                            <label htmlFor="locationInput"> Location: </label>
                            <input id='locationInput' className='form-control' type="text"/>
                        </div> */}

                        <div className="form-check">
                            <input type="checkbox" id="include-internships"/>
                            <label htmlFor="include-internships">Include Internships</label>
                        </div>

                        <div className="form-check">
                        <input type="checkbox" id="exclude-internships"/>
                            <label htmlFor="exclude-internships">Exclude Internships</label>
                        </div>
                    </div>
                    
                    <div className="col-md-9">
                        <div className="row">
                            <div className="col-md-3">
                                <p>Position</p>
                            </div>
                            <div className="col-md-3">
                                <p>Company</p>
                            </div>
                            <div className="col-md-3">
                                <p>Location</p>
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