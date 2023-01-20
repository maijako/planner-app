//Set variables
var currentDay = moment().format('dddd, DD-MMM-YYYY HH:MM A');
var currentHour = moment().format("H");
var textArea = $("<textarea>");
var saveBtn = $(".saveBtn");

//Variables to get planer hour blocks
    var nineAM = $("#9");
    var tenAM = $("#10");
    var elevenAM = $("#11");
    var twelvePM = $("#12");
    var onePM = $("#13");
    var twoPM= $("#14");
    var threePM = $("#15");
    var fourPM = $("#16");
    var fivePM = $("#17");


//The current date in the jumbotron
$("#currentDay").text(currentDay);

//check if planner hour blocks are in the present or the past
function checkTime () {
    

}

