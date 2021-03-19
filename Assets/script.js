var schedule = $('.description')
var saveBtn = $('.saveBtn')
var timeBlock = $('.time-block')
var currentDay = $('#currentDay')
var today = moment()
var currentTime = today.hours()


function dateAndTime() {
    var rightNow = today.format('MMM Do, YYYY');
    currentDay.text(rightNow);
}

setInterval(dateAndTime, 1000)

function savedSchedule() {
    timeBlock.each(function() {
        var id = parseInt($(this).attr('id'))
        var task = localStorage.getItem(id)
        if (task != 'null') {
            $(this).find(schedule).val(task)
        }
        //redundant id
        //var id = parseInt($(this).attr('id'))
        if (id > currentTime) {
            $(this).addClass('future')
        } else if (id === currentTime) {
            $(this).addClass('present')
        } else {
            $(this).addClass('past')
        }
    })
}

savedSchedule()

saveBtn.on('click', function() {
    var hour = $(this).parent().attr('id')
    var task = $(this).siblings().eq(1).val()
    localStorage.setItem(hour, task)
})

//I'm leaving all this in here for future notes on cleaner
//moved functionality of colorChange to savedSchedule
// function colorChange() {
//     timeBlock.each(function() {
        
//     })
// }

// colorChange()