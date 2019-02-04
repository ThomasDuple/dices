$(document).ready(function() {
  $('img,br').hide()

  $('#btn').on('click', function() {
    var dice1 = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    var dice2 = (Math.floor(Math.random() * (6 - 1 + 1)) + 1);
    console.log(dice1)
    console.log(dice2)

    $('.dice').hide()
    $('br').show()

    if (dice1 == dice2) {
      $('#score').text('Vous avez fait un double de ' + dice1)
    } else {
      $('#score').text('Vous avez fait ' + dice1 + ' et ' +  dice2)
    }


    if (dice1 == 1) { $('#dice1-1').show() };
    if (dice1 == 2) { $('#dice1-2').show() };
    if (dice1 == 3) { $('#dice1-3').show() };
    if (dice1 == 4) { $('#dice1-4').show() };
    if (dice1 == 5) { $('#dice1-5').show() };
    if (dice1 == 6) { $('#dice1-6').show() };

    if (dice2 == 1) { $('#dice2-1').show() };
    if (dice2 == 2) { $('#dice2-2').show() };
    if (dice2 == 3) { $('#dice2-3').show() };
    if (dice2 == 4) { $('#dice2-4').show() };
    if (dice2 == 5) { $('#dice2-5').show() };
    if (dice2 == 6) { $('#dice2-6').show() };

  })
});
