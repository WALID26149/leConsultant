const header = document.querySelector('.header');
const scrolle = document.querySelector('.scrolle')
const navBtn = document.querySelector('.nav-btn');
const closeBtn = document.querySelector('.closeModalBtn');
const contactModal = document.querySelector('.contact-model');
const overlay = document.querySelector('.overlay');
const navMobile = document.querySelector('.toggle-button');
const randomImg = document.querySelector('.slide-1 img');
const nav = document.querySelector('nav');
const ul = document.querySelector('nav ul');
const li = document.querySelectorAll('nav .ul li');

//show random imgs
function showImage() {
  const arr = [
    "https://img.freepik.com/free-photo/workplace-results-professional-report-accounting-during_1418-61.jpg",
    "https://oneplusbusinessandtax.com/wp-content/uploads/bb-plugin/cache/business-consulting-metrics-panorama.jpg",
    "https://businessyield.com/wp-content/uploads/2019/11/Business-consultant.png"
  ]
  const random = Math.floor(Math.random() * 3);
  randomImg.src = arr[random];
}

setInterval(showImage, 2000);


// make nav responsive
navMobile.addEventListener('click', () => {
  // navMobile.style.display = "none";
  ul.style.display = "flex";
  ul.style.flexDirection = "column";
  nav.style.flexDirection = "column";
  nav.style.alignItems = "flexStart";
  nav.style.backgroundColor = "#f5f5f5";
  li.style.padding = "10px 0";
})
// open and close model
navBtn.addEventListener('click', function() {
  contactModal.classList.remove('hidden');
  overlay.classList.remove('hidden');
});
const closeModalFn = function () {
  // e.preventDefault();
  contactModal.classList.add('hidden');
  overlay.classList.add('hidden');
}
// the btn to close modal
closeBtn.addEventListener('click', closeModalFn);

// next slide
const slider = function () {
  const slides = document.querySelectorAll('.request-services');
  const btnLeft = document.querySelector('.slider-btn-left');
  const btnRight = document.querySelector('.slider-btn-right');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    goToSlide(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });
};
slider();

// scrolle in the page
document.querySelectorAll('.a-link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({behavior: 'smooth'})
  });
});

// scrlle btn to the top
scrolle.addEventListener('click', function (e) {
  const s1coords = header.getBoundingClientRect();
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
});
