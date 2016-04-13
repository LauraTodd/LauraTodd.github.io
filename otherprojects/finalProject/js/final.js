$(document).ready(function(){

    //get all the nav il add click event
    $(".nav").find("li").on("click",function(){
                   
    //remove all active class
                   
    $(".nav").find("li").removeClass("active");
    //add active class to clicked li
    $(this).addClass("active");
                                                   
    var page = $(this).attr("id");
    getPartial(page);
    
    
                   
    })
    
    
    
    
    
    
})
                  
              
                  
                  
                   
                   
             

/*

    })//click
    
    function getPartial(partial){
        
    if (partial=="homePage"){//ajax get home.html
        
        $.get("partials/home.html", function(data){
            $("#pageContent").html(data);
        
            $('.carousel').carousel()
        })
    } else if (partial=="profilePage"){ //ajax get profile.html
        
    } else if (partial=="messagesPage"){ //ajax get messages.html
        
    }
    //begin the program 
    getPartial("homePage");
}

})//ready

*/