import React, { Component } from 'react'

class SavedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>

                <div className="row">
                    <div className="col-md-4">
                        <h4>Position</h4>
                    </div>
                    <div className="col-md-4">
                        <h4>Company</h4>
                    </div>
                    <div className="col-md-4">
                        <h4>Location</h4>
                    </div>
                </div>

                {/* RENDER SAVED JOBS HERE */}


                {/* EMAIL JOBS */}
            </div>
         )
    }
}
 
export default SavedJobs;