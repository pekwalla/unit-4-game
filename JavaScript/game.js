
$( document ).ready(function(){
 

//Hook to HTML

// Selects a random number to be shown at the start of the game
// Number should be should be between 19 - 120

var Random = Math.floor(Math.random()*101+19);

$('#randomNumber').text(Random);

console.log(Random);

//assign a radom value to each crystal selected 
//to be between 1 - 12
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)

var userTotal = 0;
var wins = 0;
var losses = 0;

// print on html id
$('#Wins').text("Wins:" + " " + wins);
$('#Losses').text("Losses: " + " " + losses);

//reset the game 
function reset(){
  Random=Math.floor(Math.random()*101+19);
  console.log(Random)
  $('#randomNumber').text(Random);
  num1= Math.floor(Math.random()*11+1);
  num2= Math.floor(Math.random()*11+1);
  num3= Math.floor(Math.random()*11+1);
  num4= Math.floor(Math.random()*11+1);
  userTotal= 0;
  $('#finalTotal').text(userTotal);
  } 

function win(){
    alert("You won!");
      wins++; 
      $('#Wins').text(wins);
      reset();
    }
    //adds the losses to the losses variable
    function lose(){
    alert ("You lose!");
      losses++;
      $('#Losses').text(losses);
      reset()
    }
//click on the button
$('#button1').on ('click', function(){
    userTotal = userTotal + num1;
    console.log("New userTotal= " + userTotal);
    console.log("number1" +  " " + num1);
    $('#finalTotal').text(userTotal); 
          //sets win/lose conditions
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
  }) 

  $('#button2').on ('click', function(){
    userTotal = userTotal + num2;
    console.log("New userTotal= " + userTotal);
    console.log("number2 = " +  num2);
    $('#finalTotal').text(userTotal); 
          
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
  }) 

  
  $('#button3').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    console.log("number3" +  " " + num3);
    $('#finalTotal').text(userTotal); 
           
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
  }) 
 
  $('#button4').on ('click', function(){
    userTotal = userTotal + num3;
    console.log("New userTotal= " + userTotal);
    console.log("number4" +  " " + num3);
    $('#finalTotal').text(userTotal); 
          
        if (userTotal == Random){
          win();
        }
        else if ( userTotal > Random){
          lose();
        }   
  }) 

  

 
 

})