import React, { Component } from 'react'
import { connect } from 'react-redux'

class SavedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="saved-jobs-field ">
            <table className="table col-md-12">
                <thead>
                    <tr>
                        <th className="col-md-4">Position</th>
                        <th className="col-md-4">Company</th>
                        <th className="col-md-4">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map saved jobs from state */}
                    
                    {
                        this.props.savedResults.map((item, index) => {
                            return (
                            <tr key={index}>
                                <td className="col-md-4"> {item.jobTitle} </td>
                                <td className="col-md-4"> {item.companyName} </td>
                                <td className="col-md-4"> {item.companyLocation} </td>
                            </tr>)

                        })
                    }

        


                </tbody>
            </table>

        </div>
         )
    }
}

const mapStateToProps = state => {
    return {
        savedResults: state.savedResults
    }
}
 
export default connect(mapStateToProps)(SavedJobs);