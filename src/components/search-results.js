import React, { Component } from 'react'
import {connect} from 'react-redux'

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className="search-results-field col-md-9">
                <table>
                    <thead>
                        <tr>
                            <th>Position</th>
                            <th>Company</th>
                            <th>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                            this.props.jobResults.map((item, index) => {
                                return (
                                <tr key={index}>
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
}

const mapStateToProps = state => {
    return {
        jobResults: state.searchResults

    }
}

export default connect(mapStateToProps)(SearchResults);