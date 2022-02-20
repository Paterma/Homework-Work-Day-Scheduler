$( document ).ready(function() { //So jquery will work

//setting all my variables
var btn1 = $("#btn1")
var btn2 = $("#btn2")
var btn3 = $("#btn3")
var btn4 = $("#btn4")
var btn5 = $("#btn5")
var btn6 = $("#btn6")
var btn7 = $("#btn7")
var btn8 = $("#btn8")
var btn9 = $("#btn9")
var input1 = $("#input1")
var input2 = $("#input2")
var input3 = $("#input3")
var input4 = $("#input4")
var input5 = $("#input5")
var input6 = $("#input6")
var input7 = $("#input7")
var input8 = $("#input8")
var input9 = $("#input9")
var textarea = $("textarea")
var currentDay = $("#currentDay")
var container = $(".container")

var inputSavedText= JSON.parse(localStorage.getItem("nineAM") || "{}");


//adding moments for current date 
var dateTime = moment().format("MMM Do YY");
currentDay.append(dateTime) //appending the current day with moment date

container.on("click", ".saveBtn", function (event) {
console.log("saveBtn")

event.preventDefault()
inputs()
inputs2()
inputs3()
inputs4()
inputs5()
inputs6()
inputs7()
inputs8()
inputs9()
})

//forEach- look up later

function inputs() {
    var nineAM = input1.val()
localStorage.setItem("nineAM", JSON.stringify(nineAM));
}
inputs()

function inputs2() {
    var tenAM = input2.val()
localStorage.setItem("tenAM", JSON.stringify(tenAM));
}
inputs2()

function inputs3() {
    var elevenAM = input3.val()
localStorage.setItem("elevenAM", JSON.stringify(elevenAM));
}
inputs3()

function inputs4() {
    var twelvePm = input4.val()
localStorage.setItem("twelvePM", JSON.stringify(twelvePm));
}
inputs4()

function inputs5() {
    var onePm = input5.val()
localStorage.setItem("onePM", JSON.stringify(onePm));
}
inputs5()

function inputs6() {
    var twoPm = input6.val()
localStorage.setItem("twoPM", JSON.stringify(twoPm));
}
inputs6()

function inputs7() {
    var threePm = input7.val()
localStorage.setItem("threePM", JSON.stringify(threePm));
}
inputs7()

function inputs8() {
    var fourPm = input8.val()
localStorage.setItem("fourPM", JSON.stringify(fourPm));
}
inputs8()

function inputs9() {
    var fivePm = input9.val()
localStorage.setItem("fivePM", JSON.stringify(fivePm));
}
inputs9()


function pastPresentFuture() {
    var theHour = moment().format("ha");
    
    $("textarea").each(function() {
    
        console.log(theHour)

for (let i = 0; i < 9; i++) {

    var hour = moment().set("hour", (i+9)).format("ha");
console.log(hour);
            if (hour < theHour) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            } else if (hour === theHour) {
                console.log(theHour)
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            } else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
        }
} 

    })    
}
pastPresentFuture()

var inputSavedText = JSON.parse(localStorage.getItem("inputSavedText") || "{}");

function init() {
    
    var savedItem1= JSON.parse(localStorage.getItem("inputs"))
    if (savedItem1 !== null) {
    inputSavedText = Object.assign(savedItem1, nineAM)    
    } else {
        return;
    }
}
init();


});

// $("#hour8 .description").val(localStorage.getItem("hour8"));
//DOM traversal
//.attr get attribute

// savedItems()
// console.log(savedItems)



// localStorage.setItem("savedItems")

// function renderItems () {
//     var 
// }
// localStorage.setItem("newItem", JSON.stringify(addedItem);
// addedItem()



//if statements for buttons
//reference dateTime button for colors? Change the style with past, present, future for class
//make sure buttons prevent default, on submit or on click
//WHAT I NEED TO DO
//CREATE AN EVENT WHERE WHEN THE SAVE BUTTON IS CLICKED ON THE CORRESPONDING LINE, THE TEXT INPUT IS SAVED I NLOCAL STORAGE
//THE INFO SAVED MUST BE PUSHED TO LOCAL STORAGE AND THEN RENDERED


//goal would be to use the "this" var for when you do the click event, it will look for the variable
//"I'm the button in this row- look for the data right next to me" - saved in to local storage || []
//there is no "this" for local storage- go with the individual id's and append appropriately 


//traversy media jquery crash course
//secrets of javascript ninja
//tech interview handbook