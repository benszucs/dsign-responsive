$(document).ready(function() {
  $('#banner-1').click(function() {
    $('#bannerAJAX').load('../content/cards/student-projects.html').hide().fadeIn(1000);
  }); //banner-1 onclick

  $('#banner-2').click(function() {
    $('#bannerAJAX').load('../content/cards/freelance.html').hide().fadeIn(1000);
  }); //banner-2 onclick

  $('#banner-3').click(function() {
    $('#bannerAJAX').load('../content/cards/archives.html').hide().fadeIn(1000);
  }); //banner-3 onclick

  $('#card-1').click(function() {
    $('#cardAJAX').load('../content/cards/student-projects-cards.html').hide().fadeIn(1000);
  }); //banner-3 onclick

  $('#card-2').click(function() {
    $('#cardAJAX').load('../content/cards/freelance-cards.html').hide().fadeIn(1000);
  }); //banner-3 onclick

  $('#card-3').click(function() {
    $('#cardAJAX').load('../content/cards/archives-cards.html').hide().fadeIn(1000);
  }); //banner-3 onclick
}); //end ready
