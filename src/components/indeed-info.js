import React from 'react';

const indeedScraper = require('../../scraper')

const indeedUrl1 = 'https://www.indeed.com/jobs?q=&l=Irvine%2C+CA'

class IndeedInfo extends React.Component {
    constructor(props) {
        super(props);
    }

        
    render() {
        return (
            indeedScraper.indeedScrape (indeedUrl1, (data) => {
                console.log(data);
            })
        )
    } 
}

export default IndeedInfo
    




