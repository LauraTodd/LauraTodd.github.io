//gets universal nav and brings it to all html pages before the container 
$.get("partials/nav.html", function(data){
    
    
    $(document).ready(function(){
    $(".container").prepend(data);
    $(".container").fadeIn();

   }) 
})