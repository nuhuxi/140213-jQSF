$(document).ready(function() {
// these statements tell us the "state" of the user

	$(".ryu").mouseenter(function() {
      mouseisoverryu = true;
      eventLoop ();
      console.log("mouseisoverryu = true;")
  	})

  $(".ryu").mouseleave(function() {
      mouseisoverryu = false;
      eventLoop ();
      console.log("mouseisoverryu = false;")
  	})
 
  .mousedown(function() {
        mouseisdown = true;
        eventLoop ();        
        console.log("mouseisdown = true;")
  	})

  .mouseup(function() {
        mouseisdown = false;
        eventLoop ();
        console.log("mouseisdown = false;")
    })

  $(document).keydown(function(event) {
        if (event.keyCode === 88) { 
          xisdown = true;
          eventLoop ();
        console.log("xisdown = true;") 
        }
      })

  $(document).keyup(function(event) {
        if (event.keyCode === 88) { 
          xisdown = false; 
          eventLoop ();
          console.log("xisdown = false;") 
        }
      })
  });
var xisdown = false;
var mouseisoverryu = false;
var mouseisdown = false;

function eventLoop () {

  //***************************************************
  // These statements determine what ryu is doing
  //1
    if (mouseisoverryu == true &&
        xisdown == true &&
        mouseisdown == true)
          { 
            console.log("condition 1");
            ryuisFiring();
          }
    //2
    if (mouseisoverryu == true &&
        xisdown == true &&
        mouseisdown == false)
          { 
            console.log("condition 2");
            ryuisChillin();
          }
    //3
    if (mouseisoverryu == true &&
        xisdown == false &&
        mouseisdown == true)
          { 
            console.log("condition 3");
            ryuisFiring();
          }
    //4
    if (mouseisoverryu == true &&
        xisdown == false &&
        mouseisdown == false)
          { 
            console.log("condition 4");
            ryuisReady();
          }
    //5
    if (mouseisoverryu == false &&
        xisdown == true &&
        mouseisdown == true)
          { 
            console.log("condition 5");
            ryuisChillin();
          }
    //6
    if (mouseisoverryu == false &&
        xisdown == true &&
        mouseisdown == false)
          { 
            console.log("condition 6");
            ryuisChillin();
          }
    //7
    if (mouseisoverryu == false &&
        xisdown == false &&
        mouseisdown == true)
          { 
            console.log("condition 7");
            ryuisStill();
          }
    //8
    if (mouseisoverryu == false &&
        xisdown == false &&
        mouseisdown == false)
          { 
            console.log("condition 8");
            ryuisStill();
          }
}

function ryuisStill (){
      $('.ryu-still').show();
      $(".ryu-throwing").hide();
      $(".ryu-ready").hide();
      $(".hadouken").hide();
      $(".ryu-cool").hide();
}

function ryuisReady (){
      $('.ryu-still').hide();
      $(".ryu-throwing").hide();
      $(".ryu-ready").show();
      $(".hadouken").hide();
      $(".ryu-cool").hide();
} 

function ryuisFiring (){
      playHadouken();
      $('.ryu-still').hide();
      $(".ryu-throwing").show();
      $(".ryu-ready").hide();
      $(".hadouken").show();
      $(".ryu-cool").hide();
      $(".hadouken").finish().show()
        .animate(
          {"left": "300px"},
            500, 
          function() {
            $(this).hide();
            $(this).css("left", "-212px"); 
          } 
        );

      
}

function ryuisChillin (){
      $('.ryu-still').hide();
      $(".ryu-throwing").hide();
      $(".ryu-ready").hide();
      $(".hadouken").hide();
      $(".ryu-cool").show();
}

function playHadouken () {
  $('#hadouken-sound')[0].volume = 0.5;
  $('#hadouken-sound')[0].load();
  $('#hadouken-sound')[0].play();
}
  
