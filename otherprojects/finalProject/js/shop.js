$(document).ready(function()
  //begin JS                
                  
     {

//when mouse hovers over the button - text will say 'Order Now!' 
//mouse enter button sent to log
 $("#submitButton").on("mouseenter", function() {
      $("#log").append("<br>mouse enter button");
      $(this).text("Order Now!");
    })
 //when mouse stops hovering over the button - text will say 'Complete Order!' 
//mouse leave button sent to log
     .on("mouseleave", function() {
     $("#log").append("<br>mouse leave button");
      $(this).text("Complete Order");
     
    });
    
    
//If the user does not fill out all fields of the order page they will turn red and they will not be able to sumbit the form until they fill them out
    
    $("#submitButton").on("click", function() {
$("#log").append("<br>sumbit button clicked");
//get all empty inputs and select
//add error class to div container
                                $("input, select").filter(function() {
                                    return !this.value;
                                }).closest("div").addClass("has-error");

//remove error class for non empty ones
                                $("input, select").filter(function() {
                                    return this.value; //removed !
                                }).closest("div").removeClass("has-error");

                                var errors = $(".has-error");

                                if (errors.length < 1) {
                              
                                
                                }
        
    })

        //User will be alerted if they do not enter their name, card number, cvv, expiry, address, postal code, or province
        
     $("#submitButton").on("click", function() {
         
         
        if (document.getElementById("name").value == "") { 
        alert("Please enter cardholder name");  }
         

          
       if (document.getElementById("cardNumber").value == "") { 
        alert("Please enter card number");  }

   
      
        if (document.getElementById("securityCode").value == "") { 
        alert("Please enter card cvv");  }
  
     
        if (document.getElementById("expiryYear").value == "") { 
        alert("Please enter card expiry year");  }
 

        if (document.getElementById("address1").value == "") { 
        alert("Please enter address");  }

      if (document.getElementById("zip").value == "") { 
        alert("Please enter postal/zip code");  }


      if (document.getElementById("state").value == "") { 
        alert("Please enter state/province");  }

           })                     

    


                    }) //get


            
            $("#pageContent").fadeIn();

        

        function sendConfirmation() {
            //make an object to record data for database;
            var order = {};
            //get all jquery objects
            var formData = $("input, select");
            //for each jquery object
            formData.each(function() {
                var id = $(this).attr("id");//get the id of the element
                order[id] = $(this).val();//set the field and the value
            })
//When all the fields are filled out in the form and user clicked Order Now! they will be alteted that their order is being sent to database
            // They will then be notified on the page that the album they selected will be delivered  in two business day
            //An image will be displayed that reads 'Thank you!'
            
            
            alert("Sending to database " + JSON.stringify(order));
            $("#successMsg").html(order.albumSelect + " will be delivered in two business days!" +
                                  
              "<img src='images/thankyou.png'>");

        } //sendConfirmation




     