$(document).ready(function(){

// Use this throughout the lab to add text $("#log").append("<br>added some text");

        /*
    -click - done
    -focus
    -blur
    -change
    -mouseenter and mouseleave
    */
 
    
    
$("#myButton").on("mouseenter", function(){
    $("#log").append("<br>Button mouseenter");
    $(this).text("ORDER MY PUPPY!");
    
            })
.on("mouseleave", function (){
    $("#log").append("<br>Button mouseleave");
    $(this).text("Click me!");
            });
    
//changes type here box to yellow
$("#mySingleLineText").on("focus", function(){
    $("#log").append("<br>input focus");
    $(this).css("background-color", "blue");
    
    })
 //changes type here box back to white when it is no longer selected    
.on("blur", function(){
    $("#log").append("<br>input blur");
   $(this).css("background-color", "#FFF");
    
    });
    
    // give user message about their selection
    
$("#mySelect").on("change", function(){
    $("#log").append("<br>select change");
    
    var val = $(this).val();
    
    $("#mySelectMessage").html(val + " is a nice selection!");
  
    
        });
    
    
    //user clicks button and all these things happen
$("#myButton").on("click", function(){


    
    var myInput = $("#mySingleLineText").val();
    var myTextArea = $("#myTextArea").val();
    var mySelect = $("#mySelect").val();
    var myRadio = $("[name='gender']:checked").val(); //can't use ID because there is always more than one - have to get myRadio differently 
    
    var myCheckValues  = [];
    //each is a jquery loop for objects/arrays
    //each thing that is selected, do the function
    //"This" is the element we are currently looking at 
    $("[name='vehicle']:checked").each(function() {
        myCheckValues.push($(this).val());
    });
              
    
    $("#log").append("<br>User clicked the button");
    
    $("#log").append("<br>Value of input is: " + myInput);
    $("#log").append("<br>Value of textArea is: " + myTextArea);
    $("#log").append("<br>Value of select is: " + mySelect);
    $("#log").append("<br>Value of radio button is: " + myRadio);
    $("#log").append("<br>Value of checks is: " + myCheckValues);
    
})
    
});