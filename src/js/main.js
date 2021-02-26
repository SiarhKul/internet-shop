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

const footers = document.querySelectorAll('.footer');
const carouselAll = document.querySelectorAll('.carousel');

carouselAll.forEach((carousel) => carousel.addEventListener('click', (e) => {
  console.dir(e.target);
  const { id } = e.target.dataset;
  const arrFooters = [...footers];
  const footer = arrFooters.filter((el) => el.dataset.id === id)[0];
  footer.classList.toggle('footer-show');
}));
