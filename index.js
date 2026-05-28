const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal');
//*************** */ modal
const openModal = () => {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const closeModal = () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// handle keypress event
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    console.log(e.key);
    closeModal();
  }
});

// button scrolling

const sectionOne = document.querySelector('#section--1');
const btnScrolTo = document.querySelector('.btn--scroll-to');
btnScrolTo.addEventListener('click', function (e) {
  const secOneCords = sectionOne.getBoundingClientRect();
  // const btnCords = btnScrolTo.getBoundingClientRect();
  // console.log(btnCords);
  console.log(secOneCords);
  console.log(`scrole position (x/y)`, window.pageXOffset, window.pageYOffset);

  console.log(
    `height/width viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // scrolling
  // window.scrollTo(
  //   secOneCords.left + window.pageXOffset,
  //   secOneCords.top + window.pageYOffset
  // );
  // window.scrollTo({
  //   left: secOneCords.left + window.pageXOffset,
  //   top: secOneCords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  sectionOne.scrollIntoView({ behavior: 'smooth' });
});
// page navigation
document.querySelectorAll('.nav__link').forEach(el => {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    let id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// Event Delegation
// 1.Add eventListener to the parent element
// 2.Determine what element originated the event
// some methods
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
console.log(header);
const allSections = document.querySelectorAll('.section'); //it returns NodeList
console.log(allSections); //

// creating and inserting element
// .insertAdjacentHTML()

// const message = document.createElement('div');
// console.log(message);
// message.classList.add('cookie-message');
// message.innerHTML = `<p>we use cookied for improved functionality and analytics</p> <button class='btn btn-close-cookie'>got it</button>`;

// // header.prepend(message);
// header.append(message);

// document
//   .querySelector('.btn-close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//   });

// styles
// message.style.backgroundColor = '#37383d';
// message.style.width = '100%';
// const firstchild = message.getElementsByTagName('p');
// firstchild[0].style.color = 'white';

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// console.log(message.style.height);

// document.documentElement.style.setProperty('--color-primary', 'red');

// attributes

// getAttribute()
// setAttribute()

// const logo = document.querySelector('.nav__logo');
// console.log(logo);
// console.log(logo.src);
// console.log(logo.alt);

// CLASSES
// logo.classList.add()
// logo.classList.remove()
// logo.classList.toggle()
// logo.classList.contains()

// const h1 = document.querySelector('h1');
// const hoverh1 = function (e) {
//   alert('mouse enter ');
//   h1.removeEventListener('mouseenter', hoverh1);
// };
// h1.addEventListener('mouseenter', hoverh1);

// const randomInt = (min, max) => {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
// console.log(randomColor());

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
// });

// ********** DOM Traversing ********

// going to downword
// const h1 = document.querySelector('h1');
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// console.log(h1.childNodes);
// h1.firstElementChild.style.color = 'red';
// h1.lastElementChild.style.color = 'green';

// going upward parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);
// console.log(h1.closest('.header'));
// h1.closest('.header').style.backgroundColor = 'yellow';
// h1.closest('h1').style.backgroundColor = 'blue';

// going to side ways

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

console.log(tabsContainer);

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  // Guard cluase
  if (!clicked) return;

  // remove active all from tabs
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  // remove active class from all tab content
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  clicked.classList.toggle('operations__tab--active');
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// nav animation
const nav = document.querySelector('.nav');
const handleHover = function (e) {
  // console.log(this);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    // let linkCords = link.getBoundingClientRect();
    // console.log(linkCords);
    // console.log(window.pageYOffset);
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    // console.log(siblings);
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });
    logo.style.opacity = this;
  }
};
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// sticky navbar
// const stickyCoords = sectionOne.getBoundingClientRect();
// const navElHeight = document
//   .querySelector('.nav')
//   .getBoundingClientRect().height;
// // console.log(headerEl.height);

// console.log(stickyCoords);
// window.addEventListener('scroll', function () {
//   // console.log(window.scrollY, stickyCoords.top);
//   if (this.window.scrollY > navElHeight) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// observer api

// const obsCallback = function (entries, observer) {
//   entries.forEach(el => {
//     console.log(el);
//   });
// };
// const obsOptions = {
//   root: null,
//   threshold: [0, 0.1],
// };
// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(sectionOne);

// sticky navigation using observer
const headerEl = document.querySelector('.header');
const navElHeight = document
  .querySelector('.nav')
  .getBoundingClientRect().height;
console.log(navElHeight);
const stickyNavcallback = function (entries) {
  const [entry] = entries;
  // console.log(entry);
  !entry.isIntersecting
    ? nav.classList.add('sticky')
    : nav.classList.remove('sticky');
};
const observer = new IntersectionObserver(stickyNavcallback, {
  root: null,
  threshold: 0,
  rootMargin: `-${navElHeight}px`,
});
observer.observe(headerEl);

// reveal sections
const sections = document.querySelectorAll('.section');
const revealCallback = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  // if (entry.isIntersecting) {
  //   entry.target.classList.remove('section--hidden');
  // } else {
  //   entry.target.classList.remove('section--hidden');
  // }
  observer.unobserve(entry.target);
};
const revealObserver = new IntersectionObserver(revealCallback, {
  root: null,
  threshold: 0.15,
});
sections.forEach(section => {
  revealObserver.observe(section);
  section.classList.add('section--hidden');
});

// lazy loading 
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  // Replace src with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});

imgTargets.forEach(img => imgObserver.observe(img));


// slider functionality
const slides = document.querySelectorAll('.slide');
const rightBtn = document.querySelector('.slider__btn--right');
const leftBtn = document.querySelector('.slider__btn--left');
let currentSlide = 0;
let totalSlide = slides.length - 1;
// slides.forEach((slide, i) => {
//   console.log(slide);
//   // slide.style.color = 'white';
//   slide.style.transform = `translateX(${100 * i}%)`;
// });

const gotoSlide = function (slide) {
  slides.forEach((e, i) => {
    // slide.style.color = 'white';
    e.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

gotoSlide(0);

const nextSlide = () => {
  if (currentSlide === totalSlide) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  gotoSlide(currentSlide);
  activeSlide(currentSlide);
};
const previousSlide = () => {
  if (currentSlide === 0) {
    currentSlide = totalSlide;
  } else {
    currentSlide--;
  }
  gotoSlide(currentSlide);
  activeSlide(currentSlide);
};

rightBtn.addEventListener('click', nextSlide);
leftBtn.addEventListener('click', previousSlide);

// handle arrow key
document.addEventListener('keydown', function (e) {
  console.log(e);
  e.key === 'ArrowRight' && nextSlide();
  e.key === 'ArrowLeft' && previousSlide();
});

// handle dots
const dotContainer = document.querySelector('.dots');
const activeSlide = function (slide) {
  console.log(slide);
  document.querySelectorAll('.dots__dot').forEach(dot => {
    dot.classList.remove('dots__dot--active');
  });
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};

slides.forEach((_, i) => {
  const dot = `<button class="dots__dot" data-slide="${i}"></button>`;
  dotContainer.insertAdjacentHTML('beforeend', dot);
});
activeSlide(0);

document.querySelectorAll('.dots__dot').forEach((dot, i) => {
  dot.addEventListener('click', function () {
    gotoSlide(i);
    activeSlide(i);
  });
});

// after 2 second slide will change automatically
// setInterval(() => {
//   nextSlide();
// }, 2000);

const li = document.querySelector('.nav__item');
li.addEventListener('click', function () {
  const licords = li.getBoundingClientRect();
  console.log(licords);
  console.log(window.pageYOffset);
  let;
});



const menuBtn = document.getElementById('menu-btn');

menuBtn.addEventListener('click', () => {
  const isOpen = menuBtn.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
});




const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileOverlay = document.querySelector('.overlay-mobile');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');
    const body = document.body;

    // Toggle menu
    function toggleMenu() {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('menu-open');
    }

    // Close menu
    function closeMenu() {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      overlay.classList.remove('active');
      body.classList.remove('menu-open');
    }

    // Hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Overlay click
    overlay.addEventListener('click', closeMenu);

    // Mobile link click - close menu then scroll
    mobileLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        
        // Close menu first
        closeMenu();
        
        // Wait for menu animation to complete, then scroll
        setTimeout(() => {
          const targetSection = document.querySelector(targetId);
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
          }
        }, 300);
      });
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('active')) {
        closeMenu();
      }
    });