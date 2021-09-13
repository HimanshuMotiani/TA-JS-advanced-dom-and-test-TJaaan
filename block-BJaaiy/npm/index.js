var moment = require("moment");
var date = moment().format('MMMM Do YYYY, h:mm:ss a');
var day = moment().format('dddd');
var dte = moment().format("MMM Do YY");
console.log(date);
console.log(day);
console.log(dte);

let date1 = moment(`2020-01-01`)
console.log(date1.isValid());
let date2 = moment(`2020-14-01`)
console.log(date2.isValid());


let day7 = moment().add(7, 'days').calendar();
console.log(day7);
let month7 = moment().add(7,"month").calendar();
console.log(month7);
let year7 = moment().add(7,"year").calendar();
console.log(year7);

let subDay7 = moment().subtract(7, 'days').calendar();
console.log(subDay7);
let subMonth7 = moment().subtract(7,"month").calendar();
console.log(subMonth7);
let subYear7 = moment().subtract(7,"year").calendar();
console.log(subYear7);

let dateStart= `2014-11-11`;
let dateEnd =  `2015-09-11`;
let startDate = moment(dateStart)
let endDate = moment(dateEnd)
let diff = endDate.diff(startDate);
console.log(diff); // milliseconds

var duration = moment.duration(endDate.diff(startDate));
console.log(duration)
var days = duration.asDays();
console.log(days) // days

let newStartDate = `2014-11-27`
let newEndDate =`2015-09-16`;

let newStart = moment(newStartDate);
let newEnd = moment(newEndDate);;
let difference = (moment.duration(newEnd.diff(newStart))).asDays();
console.log(difference);





let result = moment('2020-01-01').isSameOrAfter('2018-01-01');
console.log(result);
let result1 = moment('2010-01-01').isSameOrAfter('2018-01-01');
console.log(result1);


console.log(moment([2019]).isLeapYear());
console.log(moment([2020]).isLeapYear());



