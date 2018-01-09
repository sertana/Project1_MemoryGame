window.onload = function() {
  var clicks = 0;
  var colors = [
    "blue",
    "blue",
    "red",
    "red",
    "green",
    "green",
    "black",
    "black",
    "purple",
    "purple"
  ];
  var newColors = [];
  var checkArray = [];
  var divArray = [];
  // creates a random array of the above array
  while (colors.length > 0) {
    var random = Math.floor(Math.random() * colors.length);
    newColors.push(colors[random]);
    colors.splice(random, 1);
  }
  var newGAme = $("button");
  newGAme.on("click", fresh);
  function fresh() {
    document.location.reload();
  }
  //updates the counter, checks if losing condition
  function addClicks() {
    if (clicks == 16) {
      alert("Better luck next time. Try again.");
      fresh();
    } else {
      clicks++;
      $("#counter").text(clicks);
    }
  }
  //checks to see if the cards match and either hides the cards or flips the cards back
  function flipOrVanish() {
    if (divArray.length == 2) {
      if (checkArray[0] == checkArray[1]) {
        divArray[0].addClass("hidden");
        divArray[1].addClass("hidden");
        setTimeout(checkForWin, 250);
        checkArray = [];
        divArray = [];
      } else {
        if (checkArray[0] != checkArray[1]) {
          divArray[0].css("background", "darkblue");
          divArray[1].css("background", "darkblue");
          checkArray = [];
          divArray = [];
        }
      }
    }
  }
  //checks to see if all the divs has the class of hidden and pops up an alert
  // of win if the condition match
  function checkForWin() {
    if (
      $("#card1").hasClass("hidden") &&
      $("#card2").hasClass("hidden") &&
      $("#card3").hasClass("hidden") &&
      $("#card4").hasClass("hidden") &&
      $("#card5").hasClass("hidden") &&
      $("#card6").hasClass("hidden") &&
      $("#card7").hasClass("hidden") &&
      $("#card8").hasClass("hidden") &&
      $("#card9").hasClass("hidden") &&
      $("#card10").hasClass("hidden")
    ) {
      alert("You won");
      fresh();
    }
  }

  //what happens when individual cards are flipped, for all the ten cards
  $("#card1").click(function() {
    addClicks();
    $("#card1").css("background", newColors[0]);
    divArray.push($("#card1"));
    checkArray.push(newColors[0]);
    setTimeout(flipOrVanish, 250);
  });
  $("#card2").click(function() {
    addClicks();
    $("#card2").css("background", newColors[1]);
    divArray.push($("#card2"));
    checkArray.push(newColors[1]);
    setTimeout(flipOrVanish, 250);
  });
  $("#card3").click(function() {
    addClicks();
    $("#card3").css("background", newColors[2]);
    divArray.push($("#card3"));
    checkArray.push(newColors[2]);
    setTimeout(flipOrVanish, 250);
  });
  $("#card4").click(function() {
    addClicks();
    $("#card4").css("background", newColors[3]);
    divArray.push($("#card4"));
    checkArray.push(newColors[3]);
    setTimeout(flipOrVanish, 250);
  });
  $("#card5").click(function() {
    addClicks();
    $("#card5").css("background", newColors[4]);
    divArray.push($("#card5"));
    checkArray.push(newColors[4]);
    setTimeout(flipOrVanish, 250);
  });
  $("#card6").click(function() {
    addClicks();
    $("#card6").css("background", newColors[5]);
    divArray.push($("#card6"));
    checkArray.push(newColors[5]);
    setTimeout(flipOrVanish, 250);
  });
  $("#card7").click(function() {
    addClicks();
    $("#card7").css("background", newColors[6]);
    divArray.push($("#card7"));
    checkArray.push(newColors[6]);
    setTimeout(flipOrVanish, 250);
  });
  $("#card8").click(function() {
    addClicks();
    $("#card8").css("background", newColors[7]);
    divArray.push($("#card8"));
    checkArray.push(newColors[7]);
    setTimeout(flipOrVanish, 250);
  });
  $("#card9").click(function() {
    addClicks();
    $("#card9").css("background", newColors[8]);
    divArray.push($("#card9"));
    checkArray.push(newColors[8]);
    setTimeout(flipOrVanish, 250);
  });
  $("#card10").click(function() {
    addClicks();
    $("#card10").css("background", newColors[9]);
    divArray.push($("#card10"));
    checkArray.push(newColors[9]);
    setTimeout(flipOrVanish, 250);
  });
};
