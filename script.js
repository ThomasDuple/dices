class dice {
  constructor(min, max) {
    this.setMin(min);
    this.setMax(max);

    if (this.getMin() > this.getMax()) {
      var temp = this.getMin();
      this.setMin(this.getMax());
      this.setMax(temp);
    }
  }

  setMin(x) {
    if (Number.isNaN(x)) {
      this.min = 1;
    } else {
      this.min = x;
    }
  }

  setMax(x) {
    if (Number.isNaN(x)) {
      this.max = 6;
    } else {
      this.max = x;
    }
  }

  getMin() {
    return this.min;
  }

  getMax() {
    return this.max;
  }

  randomNumber() {
    return Math.floor(Math.random() * (this.getMax() + 1 - this.getMin())) + this.getMin();
  }
}

function displayRes() {
  document.getElementsByTagName("section")[0].style.display = 'block';
  var htmlStr = "";
  var sum = 0;

  if (allDices.length >= 1) {
    var nb = allDices[0].randomNumber();
    htmlStr += nb;
    sum += nb;

    for (var i = 1; i < allDices.length; i++) {
      var nb = allDices[i].randomNumber();
      htmlStr += " + " + nb;
      sum += nb;
    };
  }

  document.getElementById("res").innerHTML = '<p>' + sum + '</p><p>' + htmlStr + '</p>';
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
    htmlStr += '<tr><td>' + allDices[i].getMin() + '</td><td>' + allDices[i].getMax() + '</td><td><!----><button onclick="rmvDice(' + i + ')"><img src="img/close.svg"></button></td></tr>';
  };
  htmlStr += '<tr class="add"><td><input id="min" type="number" value="1"></td><td><input id="max" type="number" value="6"></td><td><button onclick="addDice()"><img src="img/add.svg"></button></td></tr>'
  document.getElementById("list").innerHTML = htmlStr;
  clean();
}

function rmvDice(id) {
  allDices.splice(id, 1);
  listAllDices();
}

function clean() {

  if (!dispRes) {
    dispRes = true;
    document.getElementsByTagName("section")[0].style.display = 'none'
  }

  if (allDices.length == 0) {
    document.getElementById("startBtn").style.display = 'none';
  } else if (allDices.length == 1) {
    document.getElementById("startBtn").style.display = 'block';
    document.getElementById("startBtn").innerHTML = 'Lancer le dé';
  } else {
    document.getElementById("startBtn").innerHTML = 'Lancer les dés'
  }
}

var allDices = [];
var dispRes = false;
