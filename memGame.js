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
  function addClicks() {
    if (clicks == 14) {
      alert("You lost the game. Try again.");
    } else {
      clicks++;
      $("#counter").text(clicks);
    }
  }
  function flipOrVanish() {
    if (divArray.length == 2) {
      if (checkArray[0] == checkArray[1]) {
        divArray[0].removeClass("cards").addClass("hidden");
        divArray[1].removeClass("cards").addClass("hidden");
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
  $("#card1").click(function() {
    $("#card1").css("background", newColors[0]);
    divArray.push($("#card1"));
    checkArray.push(newColors[0]);
    addClicks();
    flipOrVanish();
  });
  $("#card2").click(function() {
    $("#card2").css("background", newColors[1]);
    divArray.push($("#card2"));
    checkArray.push(newColors[1]);
    addClicks();
    flipOrVanish();
  });
  $("#card3").click(function() {
    $("#card3").css("background", newColors[2]);
    divArray.push($("#card3"));
    checkArray.push(newColors[2]);
    addClicks();
    flipOrVanish();
  });
  $("#card4").click(function() {
    $("#card4").css("background", newColors[3]);
    divArray.push($("#card4"));
    checkArray.push(newColors[3]);
    addClicks();
    flipOrVanish();
  });
  $("#card5").click(function() {
    $("#card5").css("background", newColors[4]);
    divArray.push($("#card5"));
    checkArray.push(newColors[4]);
    addClicks();
    flipOrVanish();
  });
  $("#card6").click(function() {
    $("#card6").css("background", newColors[5]);
    divArray.push($("#card6"));
    checkArray.push(newColors[5]);
    addClicks();
    flipOrVanish();
  });
  $("#card7").click(function() {
    $("#card7").css("background", newColors[6]);
    divArray.push($("#card7"));
    checkArray.push(newColors[6]);
    addClicks();
    flipOrVanish();
  });
  $("#card8").click(function() {
    $("#card8").css("background", newColors[7]);
    divArray.push($("#card8"));
    checkArray.push(newColors[7]);
    addClicks();
    flipOrVanish();
  });
  $("#card9").click(function() {
    $("#card9").css("background", newColors[8]);
    divArray.push($("#card9"));
    checkArray.push(newColors[8]);
    addClicks();
    flipOrVanish();
  });
  $("#card10").click(function() {
    $("#card10").css("background", newColors[9]);
    divArray.push($("#card10"));
    checkArray.push(newColors[9]);
    addClicks();
    flipOrVanish();
  });
  console.log(newColors);
};
