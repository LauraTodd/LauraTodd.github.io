$(document).ready(function(){
 //calls json favourites page   
$.getJSON("jsonDatabase/favourites.json",function(data){
          
          console.dir(data);
    var html="";
    
    //loads data from json page to html page 
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
                
    })
    //puts data before div album data 
    $("#albumData").append(html);




})   
                  
                  
                  
                  })

