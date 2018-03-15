import React, { Component } from 'react'
import { connect } from 'react-redux'

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div className="search-results-field col-md-9">
                <table>
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
}

const mapStateToProps = state => {
    return {
        jobResults: state.searchResults

    }
}

export default connect(mapStateToProps)(SearchResults);