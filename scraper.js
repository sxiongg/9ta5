var express = require('express');
var request = require('request');
var cheerio = require('cheerio')
var fs = require('fs');

var app = express();
var port = 8080;

var titleList = [];
let linkList = [];
let companyList = [];

var url = 'https://www.indeed.com/jobs?q=&l=Irvine%2C+CA'

request(url, function (err, resp, body) {
    var $ = cheerio.load(body);

    $('h2[class="jobtitle"]').find('a').each(function (index, element) {
        titleList.push($(element).attr('title'));
    });
    console.log(titleList);
    console.log(titleList.length);

    $('h2[class="jobtitle"]').find('a').each(function (index, element) {
        linkList.push('https:indeed.com' + $(element).attr('href'));
    });
    console.log(linkList);
    console.log(linkList.length);
    
    $('span[class="company"]').each(function (index, element) {
        companyList.push($(element).text());
    });

    console.log(companyList.length);
    console.log(companyList);

})



app.listen(port, function () {
    console.log('app listening on port' + port);
});