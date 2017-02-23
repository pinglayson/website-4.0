var moment = require('moment');

console.log(moment().format());

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1487833359;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, YY @ h:mm a'));
console.log('current moment', currentMoment.format('MMMM Do, YYYY @ h:mm A'));

// January 3rd, 2017 @ 12:13 AM
