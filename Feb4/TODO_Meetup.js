/**
 * Created by Chandu on 2/5/16.
 */

// todo: Get all events that occurred within 50 miles of Sunnyvale within the past 2 months

// npm install request

var request =  require('request'), fs = require('fs'),
    //url='https://api.meetup.com/2/open_events.xml?country=US&city=sunnyvale&state=CA&radius=50&time=-2m,&amp;status=past&key=7553237b3c125d211237b4039c1624';
   url='https://api.meetup.com/2/open_events?zip=94086&time=-2m,&amp;status=past&key=7553237b3c125d211237b4039c1624';

// Cannot use zip as we have 6 zip codes in sunnyvale and using comma's is not fetching anything..
// also using the above is fetching data from pittsburg, ca too which is around 61 miles from sunnyvale.

// getting error  :  TODO_Meetup.html:13 Uncaught ReferenceError: require is not defined

// http://www.meetup.com/find/events/?allMeetups=true&radius=50&userFreeform=Sunnyvale%2C+California%2C+USA&mcId=c94085&change=yes&month=2&day=4&year=2016&eventFilter=mysugg


request(url, function(err, res, body){
    if(res.statusCode === 200){

        var results = JSON.parse(body);
        //var JSON_data =  results["results"];

        fs.writeFile('data.json', JSON.stringify(results));
    } else{
        console.log('there was an error.....')
    }

});



/*
 request(url, function(err, res, body){
 if(res.statusCode === 200){
 // remove non-printable and other non-valid JSON chars

          console.log(body);

// preserve newlines, etc - use valid JSON
     s = body.replace(/\\n/g, "\\n")
         .replace(/\\'/g, "\\'")
         .replace(/\\"/g, '\\"')
         .replace(/\\&/g, "\\&")
         .replace(/\\r/g, "\\r")
         .replace(/\\t/g, "\\t")
         .replace(/\\b/g, "\\b")
         .replace(/\\f/g, "\\f");

// remove non-printable and other non-valid JSON chars
     result = s.replace(/[\u0000-\u0019]+/g,"");


     var results = JSON.parse(result);
     console.log(results);

     //   fs.writeFile('data.json', JSON.stringify(results));
    } else{
     console.log('there was an error.....')
    }

 });

*/