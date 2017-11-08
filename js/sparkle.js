$.fn.christmas = function() {
  $(this).each(function() {
    $(this).html($(this).text().split("").map(function(v, i) {
      return '<span class="christmas-' + (i % 2 == 0 ? 'gold' : 'blue') + '">' + v + '</span>';
    }).join(""));
  });
};

$.fn.christmas2 = function() {
  $(this).each(function() {
    $(this).html($(this).text().split("").map(function(v, i) {
      return '<span class="christmas-' + (i % 2 == 0 ? 'red' : 'blue') + '">' + v + '</span>';
    }).join(""));
  });
};

$.fn.christmas3 = function() {
  $(this).each(function() {
    $(this).html($(this).text().split("").map(function(v, i) {
      return '<span class="christmas-' + (i % 2 == 0 ? 'green' : 'blue') + '">' + v + '</span>';
    }).join(""));
  });
};

$( document ).ready(function() {
$(function() { // don't forget $(document).ready!
  $('h1.christmas').christmas();
	$('p.christmas').christmas2();
	$('p.christmas2').christmas3();
});
});