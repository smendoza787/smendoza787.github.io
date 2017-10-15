$(function() {
  $(document).scroll(function() {
    var $nav = $('.navbar')
    $nav.toggleClass('scrolled', $(this).scrollTop() > ($('.welcome').height() - 275))
  })
  $(window).scroll(function(){
    var $wScroll = $(this).scrollTop()
    $('.name').css({
      'transform' : 'translate(0px, '+ $wScroll /2.5 +'%)'
    })
    $('.title').css({
      'opacity' : Math.floor($wScroll) + '.0'
    })
  })
})
