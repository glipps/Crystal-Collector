$(document).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    $("#randomNumber").html(Random);
  
    var blue= Math.floor(Math.random()*11+1)
    var green= Math.floor(Math.random()*11+1)
    var pink= Math.floor(Math.random()*11+1)
    var yellow= Math.floor(Math.random()*11+1)


    var userTotal= 0; 
    var wins= 0;
    var losses = 0;



   
  $("#numberWins").html(wins);
  $("#numberLosses").html(losses);
  function reset(){
      
    Random=Math.floor(Math.random()*101+19);
     console.log(Random)
    $("#randomNumber").html(Random);

    green= Math.floor(Math.random()*11+1);
    pink= Math.floor(Math.random()*11+1);
    blue= Math.floor(Math.random()*11+1);
    yellow= Math.floor(Math.random()*11+1);
     userTotal= 0;

    $("#finalTotal").html(userTotal);
    } 
  


  function winner(){
  alert("You're a Winner!");
    wins++; 
    $("#numberWins").html(wins);
    reset();
  }

  
  function loser(){
  alert ("You're a Loser!");
    losses++;
    $("#numberLosses").html(losses);
    reset()
  }

    $("#blue").on("click", function(){
      userTotal = userTotal + blue;
      console.log("New userTotal=" + userTotal);
      $("#finalTotal").html(userTotal); 
            
          if (userTotal == Random){
            winner();
          }
          else if (userTotal > Random){
            loser();
          }   
    })  
    $("#yellow").on("click", function(){
      userTotal = userTotal + yellow;
      console.log("New userTotal=" + userTotal);
      $("#finalTotal").html(userTotal); 
          if (userTotal == Random){
            winner();
          }
          else if (userTotal > Random){
            loser();
          } 
    })  


    $("#pink").on("click", function(){
      userTotal = userTotal + pink;
      console.log("New userTotal=" + userTotal);
      $("#finalTotal").html(userTotal);
            if (userTotal == Random){
            winner();
          }
          else if ( userTotal > Random){
            loser();
          } 
    })  


    $("#green").on("click", function(){
      userTotal = userTotal + green;
      console.log("New userTotal=" + userTotal);
      $("#finalTotal").html(userTotal); 
        
            if (userTotal == Random){
            winner();
          }
          else if (userTotal > Random){
            loser();
          }
    });  
    
    
  }); 
