$(document).ready(function() {
  // Set current date at the top of the calendar
  var currentDate = dayjs().format('dddd, MMMM D, YYYY');
  $("#currentDay").text(currentDate);
})

function displayTime() {

displayTime();
setInterval(displayTime, 1000);
}

  // Set timeblocks for standard business hours
  var workHours = [
    { time: "9AM", id: "hour-9" },
    { time: "10AM", id: "hour-10" },
    { time: "11AM", id: "hour-11" },
    { time: "12PM", id: "hour-12" },
    { time: "1PM", id: "hour-13" },
    { time: "2PM", id: "hour-14" },
    { time: "3PM", id: "hour-15" },
    { time: "4PM", id: "hour-16" },
    { time: "5PM", id: "hour-17" }
  ];


  //To handle the save button to save to local storage
var hourSlots = $('.time-block')


hourSlots.on("click", function (event) {
  event.preventDefault;
  localStorage.setItem($(this).attr('id'), $(this).find('textarea').val())
  console.log($(this).find('textarea').val())
})

//To pull from local storage

function renderAgenda() {
  var timeBlocks = $('.time-block');

  for (var timeSlot of timeBlocks) {
    var slotId = timeSlot.id;
    console.log(slotId)

    var agenda = localStorage.getItem(slotId);
    $(timeSlot).find('textarea').val(agenda)
  }
}

renderAgenda();




 








