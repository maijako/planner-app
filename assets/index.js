//Store current time and hour in variables
var currentDay = moment().format('dddd, MMMM Do');
var currentHour = moment().format("H");

//Variables to get planer text area blocks by hour
var nineAM = $("#9");
var tenAM = $("#10");
var elevenAM = $("#11");
var twelvePM = $("#12");
var onePM = $("#13");
var twoPM = $("#14");
var threePM = $("#15");
var fourPM = $("#16");
var fivePM = $("#17")
var hourTextarea = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];

//Display the current date in the jumbotron
$("#currentDay").text(currentDay);

function checkTime() {
    for (var i = 0; i < hourTextarea.length; i++) {
        var textNumber = parseInt(hourTextarea[i].attr("id"));
        if (textNumber < currentHour) {
            (hourTextarea[i]).addClass("past");
        } else if (textNumber > currentHour) {
            (hourTextarea[i]).addClass("future");
        } else {
            (hourTextarea[i]).addClass("present");
        }
    }
}
checkTime();

//Onclick event to save user input in local storage
$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    // Save the value of the textarea to sessionStorage
    var textAreaId = $(this).prev().attr("id");
    localStorage.setItem(textAreaId, $(this).prev().val());
});

//when the document is ready, load the values from sessionStorage
$(".description").each(function () {
    $(this).val(localStorage.getItem($(this).attr("id")));
});





