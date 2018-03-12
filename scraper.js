var express = require('express');
var request = require('request');
var cheerio = require('cheerio')
var fs = require('fs');

var app = express();

var jobList = [];

exports.indeedScrape = (url,cb) => {

    request(url, function (err, resp, body) {
        var $ = cheerio.load(body);
    
        var nonSponseredJobs = []
    
        $('td#resultsCol > div.row').each(function (index, element) {
            nonSponseredJobs.push($(element));
        });
    
        // console.log(nonSponseredJobs);
        // console.log(nonSponseredJobs.length);
    
        for (i = 0; i < nonSponseredJobs.length; i++) {
    
            jobList.push ({
                jobTitle: nonSponseredJobs[i].find('a[class="turnstileLink"]').text(),
                jobLink: 'https:indeed.com' + nonSponseredJobs[i].find('a[class="turnstileLink"]').attr('href'),
                companyName: nonSponseredJobs[i].find('span[class="company"]').text(),
                companyLocation: nonSponseredJobs[i].find('span[class="location"]').text(),
            });
        }
    
        cb(jobList);
    
    })

}

// request(url, function (err, resp, body) {
//     var $ = cheerio.load(body);

//     var nonSponseredJobs = []

//     $('td#resultsCol > div.row').each(function (index, element) {
//         nonSponseredJobs.push($(element));
//     });

//     // console.log(nonSponseredJobs);
//     // console.log(nonSponseredJobs.length);

//     for (i = 0; i < nonSponseredJobs.length; i++) {

//         jobList.push ({
//             jobTitle: nonSponseredJobs[i].find('a[class="turnstileLink"]').text(),
//             jobLink: 'https:indeed.com' + nonSponseredJobs[i].find('a[class="turnstileLink"]').attr('href'),
//             companyName: nonSponseredJobs[i].find('span[class="company"]').text(),
//             companyLocation: nonSponseredJobs[i].find('span[class="location"]').text(),
//         });
//     }

//     console.log (jobList);
//     console.log (jobList.length);

// })



// app.listen(port, function () {
//     console.log('app listening on port' + port);
// });