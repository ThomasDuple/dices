class dice {
  constructor(min, max) {
    this.min = min;
    this.max = max;
  }

  randomNumber() {
    return Math.floor(Math.random() * (this.max + 1 - this.min)) + this.min;
  }
}

function displayRes() {
  htmlStr = "";

  if (allDices.length > 1) {
    htmlStr += allDices[0].randomNumber();

    for (var i = 1; i < allDices.length; i++) {
      htmlStr +=  " " + allDices[i].randomNumber();
    };
  }

  document.getElementById("res").innerHTML = htmlStr;
}

function addDice() {
  var min = document.getElementById("min").valueAsNumber;
  var max = document.getElementById("max").valueAsNumber;

  allDices.push(new dice(min, max));

  listAllDices();
}

function listAllDices() {
  var htmlStr = "<tr><th>Min</th><th>Max</th><th></th></tr>";
  for (var i = 0; i < allDices.length; i++) {
    htmlStr += '<tr><td>' + allDices[i].min + '</td><td>' + allDices[i].max + '</td><td><!----><button onclick="rmvDice(' + i + ')"><img src="img/close.svg"></button></td></tr>';
  };
  htmlStr += '<tr class="add"><td><input id="min" type="number" value="1"></td><td><input id="max" type="number" value="6"></td><td><button onclick="addDice()"><img src="img/add.svg"></button></td></tr>'
  document.getElementById("list").innerHTML = htmlStr;
}

function rmvDice(id) {
  allDices.splice(id, 1);
  listAllDices();
}

var allDices = [];