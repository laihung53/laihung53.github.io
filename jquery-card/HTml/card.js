 var clicks = 0; //counts how may picks have been made in each turn
    var firstchoice; //stores index of first card selected
    var secondchoice; //stores index of second card selected

    var match = 0; //counts matches made
    var backcard = "../image/na.jpg"; //shows back of card when turned over

    var image = []; //array to store card images
    image[0] = '../image/nar1.jpg';
    image[1] = '../image/nar1.jpg';
    image[2] = '../image/nar2.jpg';
    image[3] = '../image/nar2.jpg';
    image[4] = '../image/nar3.jpg';
    image[5] = '../image/nar3.jpg';
    image[6] = '../image/nar4.jpg';
    image[7] = '../image/nar4.jpg';
    image[8] = '../image/nar5.jpg';
    image[9] = '../image/nar5.jpg';

   // image: function(array){
   //    var counter = array.length, temp, index;
   //    // While there are elements in the array
   //    while (counter > 0) {
   //        // Pick a random index
   //        index = Math.floor(Math.random() * counter);
   //        // Decrease counter by 1
   //        counter--;
   //        // And swap the last element with it
   //        temp = array[counter];
   //        array[counter] = array[index];
   //        array[index] = temp;
   //      }
   //      return array;
   //  },

    function choose(card) {
            if (clicks == 2) {
                return;
            }
            if (clicks == 0) {
                firstchoice = card;
                document.images[card].src = image[card];
                clicks = 1;
            } else {
                clicks = 2;
                secondchoice = card;
                document.images[card].src = image[card];
                timer = setInterval("check()", 1000);
            }
        }

    function check() {
    clearInterval(timer);
    clicks = 0;
    if (image[secondchoice] == image[firstchoice]) {
        match++;
        document.getElementById("matches").innerHTML = match;
    } else {
        document.images[firstchoice].src = backcard;
        document.images[secondchoice].src = backcard;
        return;
    }
}
