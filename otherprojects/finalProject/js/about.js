$("#pageContent").html(html);

                    }) //getJSON
            } else if (partial == "orderPage") { //ajax get order.html
                $.get("partials/order2.html", function(data) {

                        $("#pageContent").html(data);

                        $('#startRentDate, #endRentDate').datepicker({});

                        $("#submitButton").on("click", function() {

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
                                    //alert("no errors");
                                    sendConfirmation();
                                }

                            }) //click
                    }) //get
            }
            $("#pageContent").fadeIn();

        }

        function sendConfirmation() {
            //make an object to record data for database;
            var order = {};
            //get all teh jquery objects
            var formData = $("input, select");
            //for each jquery object
            formData.each(function() {
                var id = $(this).attr("id");//get the id of the element
                order[id] = $(this).val();//set the field and the value
            })

            alert("Sending to database " + JSON.stringify(order));
            $("#successMsg").html("Order Received!<br/><br/>" +
              order.catSelect + " will be delivered on " + 
              order.startRentDate +
              "<img id='paws' src='images/catPaws.jpeg'>");

        } //sendConfirmation

        //begin the program, get the homepage
        getPartial("homePage");

    }) //ready
    /*
                //activate the datepicker
                $('#startRentDate, #endRentDate').datepicker({});
                //user clicks submit
                $("#submitButton").on("click", function() {
                  //add the error class to div of empty inputs
                  $("input, select").filter(function() {
                    return !this.value;
                  }).closest("div").addClass("has-error")
                  //remove the error class from all filled inputs
                  $("input, select").filter(function() {
                    return this.value;
                  }).closest("div").removeClass("has-error");
                  //get all errors
                  var hasError = $(".has-error");
                  //if no errors
                  if (hasError.length < 1) {
                    sendConfirmation();
                  }
                })
                //do when order valid
                function sendConfirmation() {
                  //we will store all our order information here
                  var order = {};
                  //get all input values
                  var inputs = $("input, select");
                  //put all the input values into object ; this each can be done with jquery objects
                  inputs.each(function() {
                    var id = $(this).attr("id");
                    order[id] = $(this).val();
                  })
                  //act as if sending to databse
                  alert("send to databse: " + JSON.stringify(order));
                  //show success message
                  $("#successMsg").html("Order Received!<br/><br/>" +
                    order.catSelect + " will be delivered on " + order.startRentDate + "<img id='paws' src='images/catPaws.jpeg'>");
                }//end sendConfirmation
    */