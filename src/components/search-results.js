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
                            <th>Position</th>
                            <th>Company</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Map API to render to page */}
                        {
                            this.props.jobResults.map((item, index) => {
                                return (
                                <tr key={index} onClick={this.saveJob.bind(this, item)}>
                                    <td> {item.jobTitle} </td>
                                    <td> {item.companyName} </td>
                                    <td> {item.companyLocation} </td>
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