
setInterval(flipperz, 4200);
function flipperz(){
  var randIndex = Math.floor((Math.random() * 80));
  $('.flashcard:eq('+randIndex+')').toggleClass('flipped');
}

setInterval(flipperz2, 2000);
function flipperz2(){
  var randIndex = Math.floor((Math.random() * 100) + 80);
  $('.flashcard:eq('+randIndex+')').toggleClass('flipped');
}

setInterval(flipperz3, 3200);
function flipperz3(){
  var randIndex = Math.floor((Math.random() * 119) + 180);
  $('.flashcard:eq('+randIndex+')').toggleClass('flipped');
}
