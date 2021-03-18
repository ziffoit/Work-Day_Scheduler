var schedule = $('.description')
var saveBtn = $('.saveBtn')
var timeBlock = $('.time-block')


function dateAndTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    currentDay.text(rightNow);
}

setInterval(dateAndTime, 1000)

function savedSchedule() {
    $('.time-block').each(function() {
        var id = $(this).attr('id')
        var task = localStorage.getItem(id)
        if (task != 'null') {
            $(this).find(schedule).val(task)
        }
    })
}

saveBtn.on('click', function() {
    var hour = $(this).parent().attr('id')
    var task = $(this).siblings('.description').val()
    localStorage.setItem(hour, task)
})

