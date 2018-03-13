var express = require('express');
var request = require('request');
var cheerio = require('cheerio')
var fs = require('fs');

var app = express();
var port = 8080;

var scrapedResults = [];
var url = 'https://www.ziprecruiter.com/candidate/search?search=&location=irvine%2C+ca';

request(url, function (err, resp, body) {
    var $ = cheerio.load(body);

    $('div.job_content').each(function (index, element) {
        scrapedResults.push($(element));
    });

    var resultsArr = [];

    for (var i = 0; i < scrapedResults.length; i++) {
        var obj = {
            jobTitle: scrapedResults[i].find('span.just_job_title').text(),
            jobLink: scrapedResults[i].find('a.job_link').attr('href'),
            companyName: scrapedResults[i].find('a.t_org_link').text(),
            companyList: scrapedResults[i].find('a.t_location_link').text()
        }
        resultsArr.push(obj)
        
    };

    console.log(resultsArr);

})

// app.listen(port, function () {
//     console.log('app listening on port' + port);
// });