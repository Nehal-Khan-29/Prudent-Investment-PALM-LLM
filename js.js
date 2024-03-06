

//============================================================================ Front ======================================================================

document.addEventListener('DOMContentLoaded', () => {

  // typing 1
      const typed1 = new Typed(".typing-1", {
          strings: [
              "<span style='color:black'>Welcome to <strong style='background-color:#ecd592;border-radius:50px;padding: 0px 10px 0px 10px;'>Prudent Investment</strong></span>",
            ],
          typeSpeed: 40,
          showCursor: false
      });

  // typing 2
      setTimeout(() => {
      const typed2 = new Typed(".typing-2", {
          strings: [
              "<span style='color:#7f00ff'>Invest in the future for the benefit</span>",
            ],
          typeSpeed: 50,
          showCursor: false
      });
    }, 2300);

});


var slideIndex = 0; 
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("card3");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex >= slides.length) { 
    slideIndex = 0;
  }
  slides[slideIndex].style.display = "block";
  setTimeout(showSlides, 4000);
}
showSlides();

//============================================================================ services ======================================================================

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];
let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});
const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragging) return; 

    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}
const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}
const infiniteScroll = () => {
    
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }

    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}
const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; 

    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);


let currentIndex = 0;
const slides = document.querySelectorAll('.card2');
const totalSlides = slides.length;
let autoplayInterval; 

function showSlide(index) {
  slides.forEach((slide, i) => {
    if (i === index) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

function startAutoplay() {
  autoplayInterval = setInterval(nextSlide, 4000); 
}

function stopAutoplay() {
  clearInterval(autoplayInterval);
}

document.getElementById('left2').addEventListener('click', () => {
  stopAutoplay(); 
  prevSlide();
});

document.getElementById('right2').addEventListener('click', () => {
  stopAutoplay(); 
  nextSlide();
});

showSlide(currentIndex); 
startAutoplay(); 

//============================================================================ Music ======================================================================

function toggleMute() {
  var audio = document.getElementById('myAudio');
  var icon = document.querySelector('#playButton span i');
  
  if (audio.muted) {
    audio.play();
    audio.muted = false;
    icon.classList.remove('fa-volume-xmark');
    icon.classList.add('fa-volume-high');
  } else {
    
    audio.muted = true;
    icon.classList.remove('fa-volume-high');
    icon.classList.add('fa-volume-xmark');
  }
}

toggleMute();

//============================================================================ All transitions ======================================================================


function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.bottom <= 0 || 
    rect.top >= window.innerHeight || 
    rect.right <= 0 || 
    rect.left >= window.innerWidth
  );
}

function handleScroll() {
  const elements = document.querySelectorAll('.PIphoto,.abtme,.card,.timecontainer ul li h3,.timecontainer ul li a,.timecontainer ul li p,.timecontainer ul li .date,.timecontainer,.lastcircle,.copyright,.contact-form tr,.logos,.wrapper');

  elements.forEach(element => {
    if (isInViewport(element)) {
      element.classList.add('slide-in');
      element.classList.remove('slide-in');
      element.style.visibility = 'visible';
    } else {
      element.classList.remove('slide-in');
      element.classList.add('slide-in');
      
    }
  });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll);

//============================================================================ ==== ======================================================================