// import $ from 'jquery';
// import 'slick-carousel';

// window.$ = window.jQuery = $;

// jQuery(() => {
//   $('.carousel').slick({
//     dots: true,
//     infinite: true,
//     centerPadding: '50px',
//     arrows: false,
//   });
// });

const footers = document.querySelectorAll('.footer');
const carouselAll = document.querySelectorAll('.carousel');

carouselAll.forEach((carousel) => carousel.addEventListener('click', (e) => {
  console.dir(e.target);
  const { id } = e.target.dataset;
  const arrFooters = [...footers];
  const dots = document.querySelectorAll('.slick-dots');
  console.log(dots);

  const footer = arrFooters.filter((el) => el.dataset.id === id)[0];
  footer.classList.toggle('footer-show');
}));
//------------------------------------------------

let dot = 0;
const btnNext = document.querySelector('.next');
const btnPrev = document.querySelector('.prev');
const slider = document.querySelector('.slider');
const dotAll = document.querySelectorAll('.dot');
const dotBox = document.querySelector('.dots-box');
const sliderItems = document.querySelectorAll('.slider-item');

const moveRight = () => {
  const viewportWidth = document.querySelector('.viewport').offsetWidth;
  dotAll.forEach((dot) => {
    dot.style.backgroundColor = '#BABABA';
    dot.style.border = ' transparent';
  });
  dot < dotAll.length - 1 ? dot++ : dot = 0;
  dotAll[dot].style.border = '1px solid #0fcf9c';
  dotAll[dot].style.backgroundColor = 'transparent';
  slider.style.left = `${-dot * viewportWidth}px`;
};

const moveLeft = () => {
  const viewportWidth = document.querySelector('.viewport').offsetWidth;
  dotAll.forEach((dot) => {
    dot.style.backgroundColor = '#BABABA';
    dot.style.border = ' transparent';
  });
  dot > 0 ? dot-- : dot = dotAll.length - 1;
  dotAll[dot].style.border = '1px solid #0fcf9c';
  slider.style.left = `${-dot * viewportWidth}px`;
};

// ---------------------------------LOAD SIZE IN ACCORDANCE WITH AMOUNT SLIDERS
window.addEventListener('load', () => {
  slider.style.width = `calc(100%* ${sliderItems.length})`;
  // dotBox.style.width = `calc(30px* ${dotAll.length})`;
});

// ---------------------------------RESIZE FOR ADAPTIVE
// window.addEventListener('resize', () => {
//   slider.style.left = `${-dot * window.outerWidth}px`;
// });

// ---------------------------------MOVE WIDTH ARROWS
btnNext.addEventListener('click', () => {
  moveRight();
});

btnPrev.addEventListener('click', () => {
  moveLeft();
});

// ---------------------------------MOVE WIDTH DOTS
dotBox.addEventListener('click', (e) => {
  if (e.target.classList.contains('dot')) {
    const viewportWidth = document.querySelector('.viewport').offsetWidth;
    dotAll.forEach((d, i) => {
      d.style.backgroundColor = '#BABABA';
      d.style.border = ' transparent';
      if (d === e.target) {
        d.style.border = '1px solid #0fcf9c';
        d.style.backgroundColor = ' transparent';
        slider.style.left = `${-i * viewportWidth}px`;
        dot = i;
      }
    });
  }
});

// ---------------------------------MOVE WIDTH SWIPES
window.addEventListener('load', () => {
  const slider = document.querySelector('.slider');
  const thresholdDistX = 30;
  const thresholdDistY = 80;
  let distX = null;
  let distY = null;
  let startX = null;
  let startY = null;

  function handleSwipe(matchParmSwipe, distX) {
    if (matchParmSwipe & (distX > 0)) {
      moveRight();
    } else if (matchParmSwipe & (distX < 0)) {
      moveLeft();
    }
  }

  slider.addEventListener('touchstart', (e) => {
    const touchobj = e.changedTouches[0];
    distX = 0;
    startX = touchobj.pageX;
    startY = touchobj.pageY;
  });

  slider.addEventListener('touchmove', (e) => {
    e.preventDefault();
  });

  slider.addEventListener('touchend', (e) => {
    const touchobj = e.changedTouches[0];
    distX = touchobj.pageX - startX;
    distY = touchobj.pageY - startY;
    const matchParmSwipe = Math.abs(distX) >= thresholdDistX
      && Math.abs(distY) <= thresholdDistY;
    handleSwipe(matchParmSwipe, distX);
  });
});
