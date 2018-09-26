$(function() {
  //  afficher toutes les villes des le commencement lancement  de la recherche
  $(".form-control").keyup(function() {
    $('.cache').show();
    $('.vue').hide();
  });
  $(".form-control").focusout(function() {
    $('.cache').hide();
    $('.vue').show();
  })

})