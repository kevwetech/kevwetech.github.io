"use strict"
document.addEventListener("DOMContentLoaded", ()=>{
    const slides =document.querySelectorAll(".slide");
    let index = 0;
    setInterval(()=>{
        slides[index].classList.remove("active");
        index = (index + 1) % slides.length;
        slides[index].classList.add("active");
    }, 2500);
});

const cards = document.querySelectorAll(".services");
const kevwe = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        if(entry.isIntersecting){
            entry.target.style.transitionDelay =
            `${entry.target.dataset.index *0.1}s`;
            entry.target.classList.add("show");
        } else{
            entry.target.style.transitionDelay = "0s";
            entry.target.classList.remove("show")
        }
    })
 },
 {threshold: 0.2}
);
cards.forEach((card)=>
kevwe.observe(card));


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


const scrollElements = document.querySelectorAll('.scroll-reveal, .fade-left, .fade-right, .zoom');

const elementInView = (el, offset = 100) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight - offset);
};

const displayScrollElement = (element) => {
  element.classList.add('active');
};

const hideScrollElement = (element) => {
  element.classList.remove('active');
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 100)) {
      displayScrollElement(el);
    } else {
      hideScrollElement(el);
    }
  });
};

window.addEventListener('scroll', handleScrollAnimation);

window.addEventListener('load', handleScrollAnimation);