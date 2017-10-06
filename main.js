$(function() {

  $("#keyboard-upper-container").hide();

  

  var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'],
      sentenceNumber = 0,
      letterNumber = 0,
      checkString = '',
      highlightOriginal = $("#yellow-block").offset().left,
      highlight = highlightOriginal,
      checkCount = 0,
      xCount = 0,
      timerStart = Date.now(),
      wordCount = 54;
  

  $("#sentence").prepend("<p id='p-sentence'></p>");
  $("#target-letter").prepend("<p id='p-target'></p>");
  $("#p-sentence").text(sentences[sentenceNumber]);

  function displayTarget(s, l) {
      $("#p-target").text(sentences[s].charAt(l));
  }


  function displaySentence() {
      if (checkString == sentences[sentenceNumber]){
        sentenceNumber = sentenceNumber + 1;
        if(sentenceNumber != 5) {
          $("#p-sentence").empty();
          $("#p-sentence").text(sentences[sentenceNumber]);
          $("#feedback").empty();
          letterNumber = 0;
          displayTarget(sentenceNumber, letterNumber);
          checkString = '';
        } else {
          var timerEnd = Date.now(),
              duration = (timerEnd - timerStart) / 60000,
              rate = Math.round(wordCount/duration),
              factor = 2 * xCount,
              weightedRate = rate - factor;
             
          if(window.confirm(`You type at ${weightedRate} words per minute! Try again? `)) {
           
              sentenceNumber = 0;
              letterNumber = 0;
              checkString = '';
              highlight = highlightOriginal;
              checkCount = 0;
              xCount = 0;
              timerStart = Date.now();
              $("#p-sentence").empty();
              $("#p-sentence").text(sentences[sentenceNumber]);
              $("#feedback").empty();
              displayTarget(sentenceNumber, letterNumber);
            
          };
        };
      };
  }

  function highlightPlacement() {
    if(checkString != sentences[sentenceNumber]){
      highlight = highlight + 17;
      $("#yellow-block").css('left', highlight);
    } else if (checkString == sentences[sentenceNumber]) {
      highlight = highlightOriginal;
      $("#yellow-block").css('left', highlight);
    }
  }

  

  displayTarget(sentenceNumber, letterNumber);
  
  $('body').on('keydown', function(e) {
    if (e.which == 16) {
      $("#keyboard-upper-container").show();
      $("#keyboard-lower-container").hide();
    } 
  })

  $('body').on('keyup', function(e) {
    if (e.which == 16) {
      $("#keyboard-upper-container").hide();
      $("#keyboard-lower-container").show();
    } 

    $('.press').removeClass("press");      
    
  })

  $('body').on('keypress', function(e) {
    var keyPress = e.which,
        keyString = String.fromCharCode(keyPress);
        
       
      $("#" + keyPress).addClass("press");
      
      if (keyString == $("#p-target").text()) {
         
         letterNumber = letterNumber + 1;
         displayTarget(sentenceNumber, letterNumber);
         checkString = checkString + keyString;
         checkCount = checkCount + 1;
         $("#feedback").append("<span class='glyphicon glyphicon-ok' id='" + checkCount + "'></span>");
         highlightPlacement();
         displaySentence();

      } else {
        xCount = xCount + 1;
        $("#feedback").append("<span class='glyphicon glyphicon-remove' id='" + xCount + "'></span>");
        
      };
      

  });

  

})
