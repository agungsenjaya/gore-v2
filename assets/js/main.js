function scrTo(e)
{
  $('#menuMobile').offcanvas('hide');
  var es = e;
  $('html, body').animate({
    scrollTop: $(es).offset().top - $(".navbar").outerHeight() + "px"
  }, 1);
}

// // LOADING
(function () {
    window.onload = function () {
      var preloader = document.querySelector('.page-loading');
      preloader.classList.remove('active');
      setTimeout(function () {
        preloader.remove();
      }, 2000);
    };
  })();

// HEADER
$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
      $(".navbar").addClass("bg-white shadow-sm");
    }else{
    $(".navbar").removeClass("bg-white shadow-sm");
  }
});



$.get('https://api.pancakeswap.info/api/v2/tokens/0x6421a0def32c7dda20890d9a3de04e1e14904d70', {}, function (data) {
  $('#price').html('$' + parseFloat((data['data'].price)).toFixed(16));;
});

$.get('https://api.dex.guru/v1/tokens/0x6421a0def32c7dda20890d9a3de04e1e14904d70-bsc', {}, function (data) {
  // $('#price').html('$' + parseFloat((data['priceUSD'])).toFixed(16));;
  $('#volume').text(data['volume24hUSD']);
  $('#liquidity').text(data['liquidityUSD']);
  // $('#volume').html('$' + parseFloat((data['priceUSD'])).toFixed(16));
})


Fancybox.bind("[data-fancybox]", {
  Image: {
    zoom: true,
  },
});

AOS.init();