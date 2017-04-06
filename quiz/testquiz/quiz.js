
var answers = ["D","A","D","B","C"], 
// var answers = [""];
//     answers[0]= "D";
//     answers[1]= "A";
//     answers[2]= "D";
//     answers[3]= "B"; 
//     answers[4]= "C";
    tot = answers.length;

function getCheckedValue(radio){
    var radios = document.getElementsByName(radio); 
    for(var y=0; y<radios.length; y++){
      if(radios[y].checked) 
        return radios[y].value;
      }
};

function getScore(){
  var score = 0;
  for ( i=0; i<tot; i++){
    console.log(getCheckedValue("question"+[i]),answers[i])
    if(getCheckedValue("question"+i)===answers[i]){
      score += 1;
    } 
  }
    
  return score;
}

function returnScore(){
  document.getElementById("boss2").innerHTML=(" Điểm số là : "+ getScore());
};
