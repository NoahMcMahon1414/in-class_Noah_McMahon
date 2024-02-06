'use strict';

// Use d3 to load the csv file using a *relative path*

d3.csv("data/websites.csv").then(function(data) {
    console.log(data);

    data.map(function (d) {
        // Iterate through the data and append a new <li> for each item

        let li = $('<li>');

        // The <li> should contain a link (<a>) to the website and 

        let a = $(`<a href="${d.url}">${d.title}<a>`);

        // a <span> with the description about the website
        
        li.append(a);
        li.append(`<span>: ${d.description}<span>`);
        $('#content ul').append(li);
    })
})