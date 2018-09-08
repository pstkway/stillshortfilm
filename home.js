$(document).ready(function() {

      var images = ['still_bg_01.jpg', 'still_bg_02.jpg'];
      var chosen = images[Math.floor(Math.random() * images.length)]
      $("div.background-img").css({'background-image': 'url(img/' + chosen + ')'});

});




$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});




$(document).scroll( function () {

    let worktop = $(document).scrollTop();

    if ( worktop > 0 ) {
      $(".arrow-down").hide();

    } else if ( worktop <= 0 ) {
      $(".arrow-down").show();
    }

  });
