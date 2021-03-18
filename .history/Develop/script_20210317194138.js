var schedule = $('#schedule')
var currentDay = $('#currentDay')


function dateAndTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
}

setInterval(dateAndTime, 1000)

