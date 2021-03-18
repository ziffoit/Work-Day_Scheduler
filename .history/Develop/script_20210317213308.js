var schedule = $('.description')
var saveBtn = $('.saveBtn')
var timeBlock = $('.time-block')
var currentDay = $('#currentDay')
var today = moment()
var currentTime = moment().hours()


function dateAndTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
}

setInterval(dateAndTime, 1000)

function savedSchedule() {
    timeBlock.each(function() {
        var id = $(this).attr('id')
        var task = localStorage.getItem(id)
        if (task != 'null') {
            $(this).find(schedule).val(task)
        }
    })
}

savedSchedule()

saveBtn.on('click', function() {
    var hour = $(this).parent().attr('id')
    var task = $(this).siblings('.description').val()
    localStorage.setItem(hour, task)
})

function colorChange() {
    currentTime = today.hours()
    timeBlock.each(function() {
        var currentHour = parseInt($(this).attr('id'))
        if (currentHour > currentTime) {
            $(this).addClass('future')
        } else if (currentHour === currentTime) {
            $(this).addClass('present')
        } else {
            $(this).addClass('past')
        }
    })
}

colorChange()