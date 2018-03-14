import React, { Component } from 'react'

class Title extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="header row">
                <h1 className="title col-md-11">NINE-TA-FIVE</h1>
                <img id="project-logo" className="col-md-1" src="././css/images/Logo1.png" />
            </div>
         )
    }
}
 
export default Title;