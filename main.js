$(function() {

  $("#keyboard-upper-container").hide();

  var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'],
      sentenceNumber = 0,
      letterNumber = 0,
      checkString = '',
      highlight = $("#yellow-block").offset().left;
     
  
  $("#sentence").prepend("<p id='p-sentence'>" + sentences[sentenceNumber] + "</p>");
  $("#feedback").prepend("<p id='p-feedback'></p>"); 
  $("#target-letter").prepend("<p id='p-target'></p>");
  
  function displayTarget(s, l) {
    if (checkString != sentences[sentenceNumber]) {
      $("#p-target").html(sentences[s].charAt(l));
      console.log(sentences[sentenceNumber]);

    } else if (checkString == sentences[sentenceNumber]){
      sentenceNumber = sentenceNumber + 1;
      $("#p-sentence").empty();
      $("#p-sentence").text(sentences[sentenceNumber]);
    }
  }

  displayTarget(letterNumber);
  
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
         console.log(checkString);
         highlight = highlight + 16;
         $("#yellow-block").css('left', highlight);
        
         

      };
      

  });

  

})
