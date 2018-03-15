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
                        <th className="col-md-5">Position</th>
                        <th className="col-md-5">Company</th>
                        <th className="col-md-2">Location</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map saved jobs from state */}

                    {
                        this.props.savedResults.map((item, index) => {
                            return (
                            <tr key={index} className="result-item">
                                <td className="col-md-5"> <a href={ item.jobLink } target="_blank"> {item.jobTitle} </a> </td>
                                <td className="col-md-5"> {item.companyName} </td>
                                <td className="col-md-2"> {item.companyLocation} </td>
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