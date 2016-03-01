$(document).ready(function() {

  var circleOrEx = "o"; // This variable represents that the first turn will be 'o'
  var isGameInProgress = true; // This variable represents that the game will activate once the document loads
  var winningCombos = { // This variable repsents the tic tac toe game board. The values are 0 - 8 and they outline the possible number combinations to win the game starting from each possible square on the board
    0: [ //0 is key - winning combination starting from top left
      [1, 2], // winning combination = player enters three of the same value accross top row
      [3, 6], // winning combination = player enters three of the same value down left column 
      [4, 8] // winning combination = player enters three of the same value diagonally from top left to bottom right 
    ],
    1: [ // winning combinations starting from the top middle 
      [0, 2], // winning combination = player enters three of the same value accross top row 
      [4, 7] // winning combination = player enters three of the same value down middle column 
    ],
    2: [ // winning combinations starting from the top right
      [0, 1],// winning combination = player enters three of the same value accross top row 
      [5, 8], // winning combination = player enters three of the same value down the right column
      [4, 6] // winning combination = player enters three of the same value diagonally from top right to bottom left
    ],
    3: [ // winning combinations starting from the middle left
      [0, 6], // winning combination = player enters three of the same value down left column
      [4, 5] // winning combination = player enters three of the same value accross middle row
    ],
    4: [ // winning combinations starting from the center
      [1, 8], // winning combination = not possible 
      [2, 6], // winning combination = player enters three of the same value diagonally from top right to bottom left 
      [1, 7], // winning combination = player enters three of the same value down middle column 
      [3, 5] // winning combination = player enters three of the same value accross middle row
    ],
    5: [ // winning combinations starting from the middle right
      [2, 8], // winning combination = player enters three of the same value down right column 
      [3, 4] // winning combination = player enters three of the same value accross middle row
    6: [ // winning combinations starting from the bottom left
      [0, 3], // winning combination = player enters three of the same value down left column 
      [2, 4], // winning combination = player enters three of the same value diagonally from top left to bottom right 
      [7, 8] // winning combination = player enters three of the same value accross bottom row 
    ],
    7: [  // winning combinations starting from the bottom middle
      [1, 4], // winning combination = player enters three of the same value down middle column  
      [6, 8] // winning combination = player enters three of the same value accross bottom row  
    ],
    8: [ // winning combinations starting from the bottom right
      [0, 4], // winning combination = player enters three of the same value diagonally from bottom right to top left 
      [2, 5], // winning combination = player enters three of the same value down right column  
      [6, 7] // winning combination = player enters three of the same value accross bottom row 
    ]
  };

  // the game is in progress once the player clicks on the game board 
  $("#board").find("div").on("click", function() {

    if (isGameInProgress && $(this).hasClass("empty")) { /// the player clicks an empty box and it is filled with an X or O 
      $(this).removeClass("empty").append("<span class='" + circleOrEx + "'>" + circleOrEx + "</span");

      checkIfWon($(this).index(), circleOrEx); // this determines the turn cycle of the game

      if (circleOrEx === "o") { // if O has played their turn run the code below to play X
        circleOrEx = "x";
      } else {
        circleOrEx = "o"; // once X plays their turn run the code to play O again 
      }
    }

  });

  // a new game will begin when the #newGame ID is clicked 
  $("#newGame").on("click", function() {

    var boardSquares = $("#board").find("div"); // boardSquares are every div tag in the #board - all the blank squares
    var firstEmptyMemorySquare = $(".container").find(".nine").filter(function() { //bonus Explain what filter does
      return $.trim($(this).text()) === "" && $(this).children().length === 0;
    }).not("#board").first();

    if (firstEmptyMemorySquare.length == 1) { // this statment places the game that has ended in the negative space on the page to make score keeping easier
      firstEmptyMemorySquare.html($("#board").html());
    } else {
      $(".container").find(".nine").not("#board").empty();
      $(".container").find(".nine").first().html($("#board").html());
    }

    // this function empties squares once the game ends so it will be ready for a new game to begin 
    boardSquares.each(function() {
      $(this).addClass("empty").empty();
    })
    isGameInProgress = true;
  })

  // this checks if the player won. chosenSquare is the final value in the winning combination. the possible values for the parameter are [0] - [8] 
  function checkIfWon(chosenSquare) {

    var mulitArr = winningCombos[chosenSquare];
    var playerWon;

    for (var i = 0; i < mulitArr.length; i++) { // this provides the length of the multidimensional array 
      playerWon = true;
      for (var j = 0; j < mulitArr[i].length; j++) { //value of j begins at 0 and player is to add three values to create a winning combination 
        if (!$("#board").find("div").eq(mulitArr[i][j]).find("span").hasClass(circleOrEx)) { 
          playerWon = false;
        }
      }

      if (playerWon) { // the remaining rows affect the game when a player enters a winning combination

        for (var j = 0; j < mulitArr[i].length; j++) {
          $("#board").find("div").eq(mulitArr[i][j]).find("." + circleOrEx).addClass("green"); //turns the first two inputs of the winning combination green 
        }
        $("#board").find("div").eq(chosenSquare).find("." + circleOrEx).addClass("green"); //turns the last input of the winning combination green 
        alert("Winner is " + circleOrEx.toUpperCase() + "!"); // winner is announced in alert 
        isGameInProgress = false; // game ends since someone has won 
        return false; //this exits the loop
      }
    }


  }
})