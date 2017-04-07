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


function choose(card) {
  if (clicks == 2) {
    return;
  }
  if (clicks == 0) {
    firstchoice = card;
    document.images[card].src = array[card];
    clicks = 1;
  } else {
    clicks = 2;
    secondchoice = card;
    document.images[card].src = array[card];
    timer = setInterval("check()", 1000);
  }
}

function check() {
  clearInterval(timer);
  clicks = 0;
  if (array[secondchoice] == array[firstchoice]) {
    match +=1 ;
    document.getElementById("matches").innerHTML = match;
  } else {
    document.images[firstchoice].src = backcard;
    document.images[secondchoice].src = backcard;
    return;
  }
}
