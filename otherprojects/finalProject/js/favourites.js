$(document).ready(function(){
    
$.getJSON("jsonDatabase/favourites.json",function(data){
          
          console.dir(data);
    var html="";
    
    
    $.each(data, function(index, item){
        html += '<div id="albums" class="col-md-3 albums">'+
            '<img class"albumImage" src="'+ item.image+'"/>'+ "<br>" +
            '<div class="albumName">' + '<strong>Name: </strong>' +item.album+'</div>' +
            '<div class="albumArtist">' + '<strong>Artist: </strong>' +item.artist+'</div>'+
            '<div class="albumYear">' + '<strong>Year: </strong>' +item.year+'</div>'+
            '<div class="albumGenre">' + '<strong>Genre: </strong>' +item.genre+'</div>'+
          
            '<div class="panel panel-default">'
        ;

            
    
                        

            html += '</div>'+
                    '</div>';
                
    })//each puppy 
    
    $("#albumData").append(html);




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