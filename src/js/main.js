// import $ from '../local_modules/jquery/dist/jquery.min';
// import '../local_modules/slick-carousel/slick/slick.min';

import $ from 'jquery';
import 'slick-carousel';

window.$ = window.jQuery = $;

jQuery(() => {
  console.log('document ready');
  $('.carousel').slick({
    dots: true,
    infinite: true,
    centerPadding: '50px',
    // speed: 500,
    // fade: true,
    // cssEase: 'linear',
    arrows: false,
  });
});
