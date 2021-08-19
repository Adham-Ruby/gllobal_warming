// upper navbar bg effect, // back to top button JS

let body = document.body,
html = document.documentElement,
scrollPos,
upperNav = document.querySelector('.upper-nav'),
mainHeading = document.querySelector('#main-heading'),
ulMenu = document.querySelector('#ul-menu'),
logo = document.querySelector('.logo');

let pageHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight),
offset = 400,
backToTopBtn = document.querySelector('.back-to-top-btn');

let formIcon = document.querySelector('.form-icon'),
clickIcon = 0,
formContainer = document.querySelector('.form-container'),
closeForm = document.querySelector('.close-form-icon');

if (pageHeight != undefined) {
    offset = pageHeight / 2.5;
} 

window.addEventListener('scroll', (event) => {
    // navbar effect
    scrollPos = body.scrollTop || html.scrollTop;
    if (scrollPos > 0) {
        upperNav.classList.add('background-scroll'); 
        mainHeading.classList.add('text-gradient-scroll'); 
        if (scrollPadd_view.matches) {
                        
        } else {
            ulMenu.classList.add('padding-x-smaller');            
        }
        logo.classList.add('margin-left-smaller'); 
    } else {
        upperNav.classList.remove('background-scroll');
        mainHeading.classList.remove('text-gradient-scroll');
        ulMenu.classList.remove('padding-x-smaller'); 
        logo.classList.remove('margin-left-smaller');  
    }

    if(scrollPos > offset) {
        formIcon.classList.add('scroll-move');
        formContainer.classList.add('scroll-move');
        backToTopBtn.classList.add('scroll-top');
    } else {
        formIcon.classList.remove('scroll-move');
        formContainer.classList.remove('scroll-move');
        backToTopBtn.classList.remove('scroll-top');
    }
});

//  click audio effect

let clickAudio = new Audio('./audio/click.wav'),
exploreBtn = document.querySelector('#explore-button');

exploreBtn.addEventListener('click', () => {
    clickAudio.play();
})

// text on video appear up effect

let videoHeading = document.querySelector('.video-heading'),
videoText = document.querySelector('.video-text'),
videoImg = document.querySelector('.video-img'),
videoHr = document.querySelector('#video-hr');

window.addEventListener('load', (event) => {
    videoHeading.classList.add('up');
    videoImg.classList.add('up');
    videoText.classList.add('up');
    exploreBtn.classList.add('up');
    videoHr.classList.add('up');
});

// intersection point

const sliders = document.querySelectorAll('.slide-in'),
appearOptions = {
    threshold : 0.4
};

const appearOnScrollObserver = new IntersectionObserver(function(entries, appearOnScrollObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('appear');
            appearOnScrollObserver.unobserve(entry.target);
        } 
    });
}, appearOptions);

sliders.forEach(slide => {
    appearOnScrollObserver.observe(slide);
});

// count up animation

let counterGlobal = document.querySelector('#counter-global');

const countUpOptions = {threshold : 0.4};

function animateValue(id, start, end, duration) {
    if (start === end) return;
    let current = start,
    increment = end > start ? 1 : -1,
    obj = document.getElementById(id),
    range = end - start,
    stepTime = Math.abs(Math.floor(duration / range));
    let timer = setInterval(() => {
        current += increment;
        obj.innerHTML = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime); 
}

const countUpObserver = new IntersectionObserver(function(entries, countUpObserver){
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            animateValue("counter-1", 1, 15, 2000);
            animateValue("counter-2", 1, 29, 2000);
            animateValue("counter-3", 1, 1117, 2000);
            countUpObserver.unobserve(entry.target);
        }
    });
}, countUpOptions);

countUpObserver.observe(counterGlobal);

// carousel functionality

let leftArr = document.querySelector('#left-arr'),
rightArr = document.querySelector('#right-arr'),
carouselCards = document.querySelectorAll('.carousel-card');

let l = 0,
movePer,
maxMove;

let mobile_view = window.matchMedia("(max-width: 530px)"),
tablet_view = window.matchMedia("(max-width: 930px)"),
scrollPadd_view = window.matchMedia("(max-width: 950px)");

function matchingMedia() {
    if (mobile_view.matches) {
        maxMove = (carouselCards.length - 1) * movePer;
    } else if (tablet_view.matches) {
        maxMove = (carouselCards.length - 2) * movePer;
    }    
}

function moveMeasuring() {
    movePer = (carouselCards[0].offsetWidth) + 32,
    maxMove = (carouselCards.length - 3) * movePer;
    matchingMedia();
}

rightArr.addEventListener('click', () => {
    moveMeasuring();
    l = l + movePer;
        // if (carouselCards == 1){l = 0;}
        if (l > 0) {leftArr.classList.remove('disabled')};
        if (l == maxMove) {rightArr.classList.add('disabled')};
		for(const i of carouselCards)
		{
			if (l > maxMove){l = l - movePer;}
			i.style.transform = 'translateX(' + -l +'px)'; // '-' + l + '%';
            // i.style.left = '-' + l + 'px';
		}
});

leftArr.addEventListener("click", () => {
    moveMeasuring();
    l = l - movePer;
		if (l <= 0){l = 0;}
        if (l == 0) {leftArr.classList.add('disabled')};
        if (l < maxMove) {rightArr.classList.remove('disabled')};
		for(const i of carouselCards){
				i.style.transform = 'translateX(' + -l + 'px)';  // '-' + l + '%';
		}
});

// countdown code 

// "Nov 12, 2021 10:30:00"

let countDownDate = new Date("Nov 12, 2021 10:30:00").getTime(),
counterDownGlobal = document.querySelector('.counterdown-global');

counterDownGlobal.innerHTML = `<div class="time-txt d-flex justify-content-center">
<div class="time d-flex justify-content-center align-items-center"></div>
<div class="count-txt d-flex justify-content-center align-items-center">Seconds</div>
</div>
<div class="time-txt d-flex justify-content-center">
<div class="time d-flex justify-content-center align-items-center"></div>
<div class="count-txt d-flex justify-content-center align-items-center">Minutes</div>
</div>
<div class="time-txt d-flex justify-content-center">
<div class="time d-flex justify-content-center align-items-center"></div>
<div class="count-txt d-flex justify-content-center align-items-center">Hours</div>
</div>
<div class="time-txt d-flex justify-content-center">
<div class="time d-flex justify-content-center align-items-center"></div>
<div class="count-txt d-flex justify-content-center align-items-center">Days</div>
</div>`;


let times = document.querySelectorAll('.time');

let countdown = setInterval(() => {

  let now = new Date().getTime();
    
  let distance = countDownDate - now;
    
  let days = Math.floor(distance / (1000 * 60 * 60 * 24)), 
  hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
  minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    times[0].innerHTML = seconds;
    times[1].innerHTML = minutes;
    times[2].innerHTML = hours;
    times[3].innerHTML = days;

  if (distance < 0) {
    clearInterval(countdown);
       counterDownGlobal.classList.add('display-block');
       counterDownGlobal.innerHTML = `<p>Conference is already done!</p> <a class="btn text-center btn-lg btn-success hover-btn count-btn" href="#">More info</a> <br> <br>`;
  }
}, 1000);   

// progress bar scroll JS

const containerJs = document.getElementById('js-container');
const highlight = document.getElementById('js-highlight');
var containerHeight;

window.onscroll = function() {
    
  containerHeight = containerJs.offsetHeight - window.innerHeight;
  containerPos = containerJs.getBoundingClientRect();
  diff = containerHeight + containerPos.top;
  progressPercentage = diff / containerHeight * 100;
  cssWidth = Math.floor(100 - progressPercentage);
  highlight.style.width = cssWidth + "%";
}

// contact form 

formIcon.addEventListener('click', () => {
    clickIcon ++;
    if (clickIcon % 2 == 0) {
        formContainer.classList.remove('open');
    } else {
        formContainer.classList.add('open');
    }
});

closeForm.addEventListener('click', () => {
    clickIcon ++;
    formContainer.style.transform = "scale(0.5)";
    formContainer.style.opacity = 0;
});

// side nav bar on click drop down menu appear

let globalDropDowns = document.querySelectorAll('.global-dropmenu'),
dropItems = document.querySelectorAll('.dropdown-items'),
arrNavDowns = document.querySelectorAll('.arr-nav-down');

globalDropDowns.forEach((item, index) => {
    item.onclick = () => {
        dropItems[index].classList.toggle('show-drop');
        arrNavDowns[index].classList.toggle('rotate-top'); 
    }
});

// burger clicked

let menuNav = document.querySelector('.menu-nav'),
burgerIcon = document.querySelector('.menu-btn'),
closeNavIcon = document.querySelector('.close-nav-icon'),
burgerIconX = document.querySelector('.menu-btn-burger'),
clickBurgerIcon = 0;

burgerIcon.onclick = () => {
    clickBurgerIcon ++;
    if (clickBurgerIcon % 2 == 0) {
        menuNav.classList.remove('open');
        burgerIconX.classList.remove('openX');        
    } else {
    menuNav.classList.add('open');
    burgerIconX.classList.add('openX');
    }    
}

closeNavIcon.onclick = () => {
    clickBurgerIcon ++;
    menuNav.classList.remove('open');
    burgerIconX.classList.remove('openX');
}

let navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.onclick = () => {
        clickBurgerIcon++;
        menuNav.classList.remove('open');
        burgerIconX.classList.remove('openX');
    }
});