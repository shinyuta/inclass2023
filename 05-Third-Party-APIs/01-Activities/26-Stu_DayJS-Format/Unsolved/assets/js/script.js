// Use Day.js to format the date and assign to the declared variable.


// TODO: 1. What is your graduation date in the following format: Jan 1, 1999?

var grad =  dayjs('2026-5-05').format('MMMM D YYYY');
$('#1a').text(grad);

// TODO: 2. What day of the week will 1/1/2027 be? (e.g. Is it "Monday"?)

var dayweek = dayjs('2027-1-01').format('dddd')
$('#2a').text(dayweek);

// TODO: 3. What is the current time in the format: hours:minutes:seconds

var today = dayjs();
$('#3a').text(today.format('h:mm:ss a'));

// TODO: 4. What is the current Unix timestamp?

var todayunix = dayjs(today).unix()
$('#4a').text(todayunix);


// TODO: 5. Parse the following Unix timestamp, 1318781876, and convert into any time/date format.

var unixtoday = dayjs.unix(1318781876)
$('#5a').text(unixtoday.format('MMMM D YYYY'));

// TODO: 6. What is the difference in days between May 4, 2027 and today? Hint:
// You can display the difference between two dayjs objects by using the dayjs
// diff method.)

var may4th = dayjs('2027-5-04')
$('#6a').text(may4th.diff(today, 'days'));
