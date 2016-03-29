$(document).ready(function(){
    
$.getJSON("jsonDatabase/jsonPuppies.json",function(data){
          
          console.dir(data);
    var html="";
    
    
    $.each(data, function(index, item){
        html += '<div class="col-md-4 puppy">'+
            '<div class="puppyName">'+item.name+'</div>' +
            '<div class="puppyType">'+item.type+'</div>'+
            '<div class="puppyGender">'+item.gender+'</div>'+
            '<img class"puppyImage" src="'+item.image+'"/>'+
            '<div class="panel panel-default">'+
            '<div class="panel-heading">Comments</div>';
 
            $.each(item.comments, function(ind, i){
                html +=   '<div class="panel-body">'+
                    '<div class="buyerName">' + i.username + '</div>' +
                        '<div class="buyerComment">' + i.comment + '</div>'+
                        '<div class="buyerStars">'+
                        '</div>';
                var numStars = Number(i.stars);
                
                for(var i = 1; i <= 5; i++){
                    if(i <=numStars){
                    html+='<img src="images/star.png"/>';
                    } else{
                    html+='<img src="images/empty.png"/>';
                    }
                }
                
                   html+='</div>';//end stars
        
                            })//each comment 
            
    
                
         
        

            html += '</div>'+
                    '</div>';
                
    })//each puppy 
    
    $("#puppyData").append(html);




})   
                  
                  
                  
                  })

/*

<div class="col-md-4 puppy">
<div class="puppyName"></div>
<div class="puppyType"></div>
<div class="puppyGender"></div>
<img src=""/>
<div class"commentsContainer">
//one per comment
<div class"buyerName"></div>
<div class"buyerLocation"></div>
<div class"buyerStars">
//5 stars, some full, some empty
</div> //end stars here 
</div>//end commentsContainer
</div> //end puppy
          
          
 <div class="panel panel-default">

  <div class="panel-heading">Comments</div>
  <div class="panel-body">
    //name
    //comments
    //stars
  </div>

  \
*/