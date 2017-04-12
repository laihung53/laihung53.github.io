 var clicks = 0;
 var firstchoice;
 var secondchoice;

 var match = 0;
 var backcard = "../image/na.jpg";

 function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
var array  = new Array(); 
array[0] = '../image/nar1.jpg';
array[1] = '../image/nar2.jpg';
array[2] = '../image/nar2.jpg';
array[3] = '../image/nar1.jpg';
array[4] = '../image/nar3.jpg';
array[5] = '../image/nar3.jpg';
array[6] = '../image/nar4.jpg';
array[7] = '../image/nar4.jpg';
array[8] = '../image/nar5.jpg';
array[9] = '../image/nar5.jpg';
array[10] = '../image/nar9.jpg';
array[11] = '../image/nar9.jpg';
array[12] = '../image/nar6.jpg';
array[13] = '../image/nar6.jpg';
array[14] = '../image/nar7.jpg';
array[15] = '../image/nar7.jpg';
array[16] = '../image/nar8.jpg';
array[17] = '../image/nar8.jpg';
var array = shuffle(array);
var arrayDaTinhDiem  = new Array();
var indexDaTinhDiem =0;

function startGame() {
  timer = setInterval("logTimer()", 1000);
}
var timerValue = 0;
function logTimer() {
  timerValue = timerValue + 1;
  document.getElementById("timerId").innerHTML = timerValue;
  if(timerValue == 60) {
    console.log("Neu so the chua duoc mo het thi thong bao ban da thua cuoc");
  }
}
// function displayTimer(a){
//   var hours = Math.trunc(a/(60*60));
//   var minutes = a % (60*60);
//   var second = a % (60);
//   console.log(hours +":"+ minutes + ":"+second);
// }
function choose(card) {
  if (clicks == 2) {
    return;
  }
  if (clicks == 0) {
    firstchoice = card;
    document.images[card].src = array[card];
    document.images[card].className += " choosed";
    clicks = 1;
  } else {
    clicks = 2;
    secondchoice = card;
    document.images[card].src = array[card];
    timer = setInterval("check()", 1000);
  }
}
function checkExist(value1, arrayExist) {
  var exist = false;
  for(var i=0;i<arrayExist.length;i++) {
    if(value1 == arrayExist[i]) {
      exist = true;
      return exist;
    }
  }
  return exist;
}
function check() {
  clearInterval(timer);
  clicks = 0;
  if (array[secondchoice] == array[firstchoice]) {
    if(checkExist(array[secondchoice],arrayDaTinhDiem)) {
      document.images[firstchoice].src = backcard;
      document.images[secondchoice].src = backcard;
      return;
    }else {
      match +=1 ;
      document.getElementById("matches").innerHTML = match;
      document.images[firstchoice].style.opacity = "0"
      document.images[secondchoice].style.opacity = "0"
    }
  } else {
    document.images[firstchoice].src = backcard;
    document.images[secondchoice].src = backcard;
    return;
  }
}
function audio(){
  var x = document.getElementById("audio");
  x.play()
};
function hieuung(){
  var x = document.getElementById("hieuung");
  x.play()
};  