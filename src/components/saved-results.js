import React, { Component } from 'react'
import { connect } from 'react-redux'

import {removeFromSaved} from '../redux/actions'

class SavedJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {}
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
                                    <tr key={index} className="result-item" onDoubleClick={this.deleteSavedJob.bind(this, item, index)}>
                                        <td className="col-md-5"> <a href={item.jobLink} target="_blank"> {item.jobTitle} </a> </td>
                                        <td className="col-md-5"> {item.companyName} </td>
                                        <td className="col-md-2"> {item.companyLocation} </td>
                                    </tr>)

                            })
                        }
                    </tbody>
                </table>

                <img id="pin-logo" src="././css/images/pin.png"/>
                <p className='double-click'>Double click job to remove.</p>

                <button className="btn btn-block col-md-12" onClick={ this.sendEmail.bind(this) }> Share Jobs </button>
            </div>
        )
    }

    deleteSavedJob(item, index) {
        var savedArrCopy = this.props.savedResults.slice();
        var i = savedArrCopy.indexOf(item);
        savedArrCopy.splice(i, 1);

        this.props.deleteJobFromRedux(savedArrCopy)
    }

    sendEmail() {
        let emailBody = '';

        for(var i = 0; i < this.props.savedResults.length; i++) {
            let position = this.props.savedResults[i].jobTitle;
            let company = this.props.savedResults[i].companyName;
            let city = this.props.savedResults[i].companyLocation;
            let link = this.props.savedResults[i].jobLink;
            
            var result = i+1 + ") " + position + " @"  + company + " in " + city + '%0A' + '      ' + link + '%0A' + '%0A' ; 
            emailBody = emailBody.concat(result)
        }
         
        document.location = "mailto:"+"?subject="+"&body="+emailBody;
    }
}

const mapStateToProps = state => {
    return {
        savedResults: state.savedResults
    }
}

const mapDispatchToProps = dispatch => {
    return {
        deleteJobFromRedux: arr => dispatch(removeFromSaved(arr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SavedJobs);