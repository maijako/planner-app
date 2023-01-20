//Set variables
var currentDay = moment().format('dddd, DD-MMM-YYYY HH:MM A');
var currentHour = moment().format("H");
var textArea = $("<textarea>");
var saveBtn = $(".saveBtn");

//Variables to get planer text area blocks by hour
    var nineAM = document.getElementById("9");
    var tenAM = $("#10");
    var elevenAM = $("#11");
    var twelvePM = $("#12");
    var onePM = $("#13");
    var twoPM= $("#14");
    var threePM = $("#15");
    var fourPM = $("#16");
    var fivePM = $("#17");
    

//Variables to store hour blocks as numbers
var nine = parseInt(nineAM.dataset.indexNumber);
var ten = parseInt(tenAM.dataset.indexNumber);
var eleven = parseInt(elevenAM.dataset.indexNumber);
var twelve = parseInt(twelvePM.dataset.indexNumber);
var one = parseInt(onePM.dataset.indexNumber);
var two = parseInt(twoPM.dataset.indexNumber);
var three = parseInt(threePM.dataset.indexNumber);
var four = parseInt(fourPM.dataset.indexNumber);
var five = parseInt(fivePM.dataset.indexNumber);
var hourBlocks = [nine, ten, eleven, twelve, one, two, three, four, five];
// //The current date in the jumbotron
// $("#currentDay").text(currentDay);

// //check if planner hour blocks are in the present or the past
// function checkTime () {
//     for (var i = 0; i<hourBlocks.length; i++) {
//         if (hourBlocks[i] < currentHour){
//             hourBlocks[i].addClass("past");
//         } else if (hourBlocks[i] > currentHour){
//             hourBlocks[i].addClass("future");
//         } else {
//             hourBlocks[i].addClass("present");
//         }
//     }
// }

// checkTime();

console.log(typeof(nineAM.dataset.indexNumber));