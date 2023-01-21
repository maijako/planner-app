//Store current time and hour in variables
var currentDay = moment().format('dddd, DD-MMM-YYYY HH:MM A');
var currentHour = moment().format("H");

//Variables to get planer text area blocks by hour
    var nineAM = document.getElementById("9");
    var tenAM = document.getElementById("10");
    var elevenAM = document.getElementById("11");
    var twelvePM = document.getElementById("12");
    var onePM = document.getElementById("13");
    var twoPM= document.getElementById("14");
    var threePM = document.getElementById("15");
    var fourPM = document.getElementById("16");
    var fivePM = document.getElementById("17");
var hourTextarea = [nineAM, tenAM, elevenAM, twelvePM, onePM, twoPM, threePM, fourPM, fivePM];    

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

//Display the current date in the jumbotron
$("#currentDay").text(currentDay);

//check if planner hour blocks are in the present or the past
function checkTime () {
    for (var i = 0; i<hourBlocks.length; i++) {
        if (hourBlocks[i] < currentHour){
            $(hourTextarea[i]).addClass("past");
        } else if (hourBlocks[i] > currentHour){
            $(hourTextarea[i]).addClass("future");
        } else {
            $(hourTextarea[i]).addClass("present");
        }
    }
}
checkTime();

//Onclick event to save user input in local storage
$(document).ready(function(){
    function clearStorage() {
        localStorage.clear();
    }

    $(".saveBtn").on("click", function (event){
        event.preventDefault();
        // Save the value of the textarea to sessionStorage
        var textAreaId = $(this).prev().attr("id");
        localStorage.setItem(textAreaId, $(this).prev().val());
    });

    $("#clear").on("click", clearStorage); 
    //when the document is ready, load the values from sessionStorage
    $(".description").each(function(){
        $(this).val(localStorage.getItem($(this).attr("id")));
    });
});




