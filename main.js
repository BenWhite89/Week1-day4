$(function() {
 
  var sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
 
  $("#keyboard-upper-container").hide();

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
    var keyPress = e.which;
       
      $("#" + keyPress).addClass("press");
      

  });
    

})
