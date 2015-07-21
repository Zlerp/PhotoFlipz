
setInterval(flipperz, 2000);
function flipperz(){
  var randIndex = Math.floor((Math.random() * 6));
  $('.flashcard:eq('+randIndex+')').toggleClass('flipped');
}
