// Contact burger
let contactBurger = document.querySelector(".contact_burger");
let navList = document.querySelector(".nav_list");
contactBurger.addEventListener('click', () => {
    contactBurger.classList.toggle('active');
    navList.classList.toggle('active');
})

// Accordion
let acc = document.getElementsByClassName("accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("activated");
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

const dots = document.querySelectorAll('.dot');
const slides = document.querySelectorAll('.slide');

let index = 0;
const activeSlide = n =>{
    for(slide of slides){
        slide.classList.remove('activer');
    }
    slides[n].classList.add('activer');
}
const activeDote = n =>{
    for(dot of dots){
        dot.classList.remove('activer');
    }
    dots[n].classList.add('activer');
}
const prepareCurrentSlide = ind => {
    activeSlide(index);
    activeDote(index);
}
const nextSlide = () => {
    if(index == slides.length-1){
        index = 0;
        prepareCurrentSlide(index);
    }else{
        index++;
        prepareCurrentSlide(index);
    }    
}

const prevSlide = () => {
    if(index == 0){
        index = slides.length-1;
        prepareCurrentSlide(index);
    }else{
        index--;
        prepareCurrentSlide(index);
    }    
}

dots.forEach((item, indexDot) => {
    item.addEventListener('click',() => {
        index = indexDot;
        prepareCurrentSlide(index);
    })
})

window.onload = () => {
    setInterval(nextSlide, 1000);
}

