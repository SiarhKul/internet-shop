import $ from 'jquery';
import 'slick-carousel';

window.$ = window.jQuery = $;

jQuery(() => {
  console.log('document ready');
  $('.carousel').slick({
    dots: true,
    infinite: true,
    centerPadding: '50px',
    arrows: false,
  });
});

const cardMobilephone = document.querySelector('.card-mobilephone ');

cardMobilephone.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log(e.target.children[4]);
});
// cardMobilephone.addEventListener('click', (e) => {
//   const footer = document.querySelector('.footer');
//   footer.classList.toggle('footer-show');
//   console.log(e.target);
//   console.log(footer);
// });
