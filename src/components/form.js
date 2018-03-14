import React, { Component } from 'react';

class SearchForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="search-inputs-field col-md-3">
                <div className="form-group">
                    <label htmlFor="location-input"> Location: </label>
                    <input id="location-input" className="form-control" type="text" />
                </div>

                <div className='form-group'>
                    <label htmlFor="keywordInput"> Keywords: </label>
                    <input id='keywordInput' className='form-control' type="text"/>
                </div>

                <div className="form-check">
                    <input type="checkbox" id="include-internships"/>
                    <label htmlFor="include-internships">Only Internships</label>
                </div>

                <div className="form-check">
                <input type="checkbox" id="exclude-internships"/>
                    <label htmlFor="exclude-internships">Exclude Internships</label>
                </div>
            </div>
         )
    }
}
 
export default SearchForm;