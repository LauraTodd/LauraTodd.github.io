//gets universal footer and brings it to all html pages after the container 
$.get("partials/footer.html", function(data){
    
    
    $(document).ready(function(){
    $(".container").append(data);
    $(".container").fadeIn();

   }) 
})