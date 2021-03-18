var schedule = $('.description')
var currentDay = $('#currentDay')
var saveBtn = $('.saveBtn')


function dateAndTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
}

setInterval(dateAndTime, 1000)

saveBtn.on('click', function() {
    var hour = $(this).parent().attr('id')
    var task = $(this).siblings('.description').val()
    localStorage.setItem(hour, task)
})

