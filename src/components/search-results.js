import React, { Component } from 'react'
import { connect } from 'react-redux'

import { pushJobToSaved } from '../redux/actions'

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
            jobsPerPage: 25
        }
    }
    render() {
        const indexOfLastJob = this.state.currentPage * this.state.jobsPerPage;
        const indexOfFirstJob = indexOfLastJob - this.state.jobsPerPage;
        const currentJobs = this.props.jobResults.slice(indexOfFirstJob, indexOfLastJob);

        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(this.props.jobResults.length / this.state.jobsPerPage); i++) {
            pageNumbers.push(i);
        }

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
                    <tbody id='jobs-font'>

                        {
                            currentJobs.map((item, index) => {

                                return (

                                    <tr key={index} onDoubleClick={this.saveJob.bind(this, item)} className="result-item">
                                        <td className="col-md-5"> <a href={item.jobLink} target="_blank"> {item.jobTitle} </a> </td>
                                        <td className="col-md-5"> {item.companyName} </td>
                                        <td className="col-md-2"> {item.companyLocation} </td>
                                    </tr>)

                            })
                        }

                    </tbody>
                </table>
                
                <div className="page-footer justify-content-md-center"> 
                    {/* Render Page Buttons */}
                    {
                            pageNumbers.map((number, index) => {

                            return (
                                <button onClick={this.nextPage.bind(this)} key={index} id={number} className="btn page-button"> {number} </button>
                            )

                        })
                    }
                </div>

            </div>
        )
    }

    // Function that sends clicked job to the reducer 
    saveJob(item) {
        this.props.sendJobToRedux(item);
        alert('Posting added to your Saved Jobs!')

    }

    //Function that changes page
    nextPage(e) {

        this.setState({
            currentPage: Number(e.target.id)
        })
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