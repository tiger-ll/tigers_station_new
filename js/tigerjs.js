
$(document).ready(function(){
//colorAnimation
$('.eff').mouseenter(function(){$(this).animate({backgroundColor: '#E4D8B8'})
});
$('.eff2').mouseleave(function(){$(this).animate({backgroundColor: 'rgba(255,255,255,0.8)'})
});

$('a.eff.dd1').mouseleave(function(){$(this).animate({backgroundColor: '#A1E6E9'})
 
});
$('a.eff.dd2').mouseleave(function(){$(this).animate({backgroundColor: '#51D2D6'})
});

$('a.eff.dd3').mouseleave(function(){$(this).animate({backgroundColor: '#208E92'})
});


$('.navbar-toggle').mouseenter(function(){$('.icon-bar').animate({backgroundColor: '#E4D8B8'})
});

$('.navbar-toggle').mouseleave(function(){$('.icon-bar').animate({backgroundColor: 'black'})
});
//isotope
var $container = $('#container');
$('#container').isotope({
  // options...
  
  itemSelector: '.item',
  layoutMode: 'fitRows'
});

$('#filters').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  
$container.isotope({ filter: filterValue });
});
  $('.btn-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.is-checked').removeClass('is-checked');
      $( this ).addClass('is-checked');
    });
  });


});
// JavaScript Document*/