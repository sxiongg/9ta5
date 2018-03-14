import React, { Component } from 'react'

class SavedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="saved-jobs-container">

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

                {/* RENDER SAVED JOBS HERE */}


                {/* EMAIL JOBS */}
            </div>
         )
    }
}
 
export default SavedJobs;