import React, { Component } from 'react'
import { connect } from 'react-redux'

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
                        <tr className='table-labels'>
                            <th className='col-md-3'>Position</th>
                            <th className='col-md-3'>Company</th>
                            <th className='col-md-1'>Location</th>
                        </tr>
                    </thead>
                    <tbody id='jobs-font'>

                        {
                            this.props.jobResults.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td> <a href={item.jobLink}> {item.jobTitle}</a></td>
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