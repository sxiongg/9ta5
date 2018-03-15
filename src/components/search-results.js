import React, { Component } from 'react'
import {connect} from 'react-redux'

import { pushJobToSaved } from '../redux/actions'

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="search-results-field col-md-9">
                <table className="table">
                    <thead>
                        <tr>
                            <th className="col-md-5">Position</th>
                            <th className="col-md-5">Company</th>
                            <th className="col-md-2">Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map API to render to page */}
                        {
                            this.props.jobResults.map((item, index) => {
                                return (
                                <tr key={index} onDoubleClick={this.saveJob.bind(this, item)} className="result-item">
                                    <td className="col-md-5"> <a href={ item.jobLink } target="_blank"> { item.jobTitle } </a> </td>
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
    // Function that sends clicked job to the reducer 
    saveJob(item) {
        this.props.sendJobToRedux(item);
    }
}

const mapStateToProps = state => {
    return {
        jobResults: state.searchResults

    }
}

const mapDispatchToProps = dispatch => {
    return {
        sendJobToRedux: object => dispatch(pushJobToSaved(object))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);