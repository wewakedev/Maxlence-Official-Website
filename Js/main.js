//  navbar
$(document).ready(function () {
    if ($(window).width() > 991){
    $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
        }
    });

//HomeShop Filter

// $('body').on('click', '.filter__headitem', function() {
//     let ele = $(this)
//     let filterData = ele.attr('filter-data')
    
//     // Reset head
//     ele.parent().children().removeClass('active')
   
//     // Active head
//     ele.addClass('active')
    
//     // Reset body
//     $('.filter__bodyitem').removeClass('active')
   
//     // Active body
//     $('.filter__bodyitem[filter-data*="[' +filterData+ ',"], .filter__bodyitem[filter-data*=",' +filterData+ ',"], .filter__bodyitem[filter-data*=",' +filterData+ ']"]').addClass('active')
//  })
 
//  $('.filter__headitem').first().click()




//  Testimonial Slider


$('.carousel').slick({
    dots:true,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });



  let el = $('.switch');
let cur = el.find('.current');
let options = el.find('.options li');
let content = $('#content');

// Open language dropdown panel

el.on('click', function(e) {
  el.addClass('show-options');
  
  setTimeout(function() {
    el.addClass('anim-options');
  }, 50);
  
  setTimeout(function() {
    el.addClass('show-shadow');
  }, 200);
});


// Close language dropdown panel

options.on('click', function(e) {
  e.stopPropagation();
  el.removeClass('anim-options');
  el.removeClass('show-shadow');
  
  let newLang = $(this).data('lang');
  
  cur.find('span').text(newLang);
  content.attr('class', newLang);
  
  setLang(newLang);
  
  options.removeClass('selected');
  $(this).addClass('selected');
  
  setTimeout(function() {
    el.removeClass('show-options');
  }, 600);
});


// Save selected options into Local Storage

function getLang() {
  let lang;
  if (localStorage.getItem('currentLang') === null) {
    lang = cur.find('span').text();
  } else {
    lang = JSON.parse(localStorage.getItem('currentLang')).toLowerCase();
  }
  
  // console.log(lang);

  cur.find('span').text(lang);
  options.parent().find(`li[data-lang="${lang}"]`).addClass('selected');
  
  content.attr('class', lang);
}

getLang();

function setLang(newLang) {
    localStorage.setItem('currentLang', JSON.stringify(newLang).toLowerCase());
  
  content.attr('class', newLang);
  
  // console.log('New language is: ' + newLang);
}



///Question feed 

$(function() {
  var step = 0;
  var stepItem = $('.step-progress .step-slider .step-slider-item');

  // Step Next
  $('.step-content .step-content-foot button[name="next"]').on('click', function() {
    var instance = $(this);
    if (stepItem.length - 1 < step) {
      return;
    }
    if (step == (stepItem.length - 2)) {
      instance.addClass('out');
      instance.siblings('button[name="finish"]').removeClass('out');
    }
    $(stepItem[step]).addClass('active');
    $('.step-content-body').addClass('out');
    $('#' + stepItem[step + 1].dataset.id).removeClass('out');
    step++;
  });

  // Step Last
  $('.step-content .step-content-foot button[name="finish"]').on('click', function() {
    if (step == stepItem.length) {
      return;
    }
    $(stepItem[stepItem.length - 1]).addClass('active');
    $('.step-content-body').addClass('out');
    $('#stepLast').removeClass('out');
  });

  // Step Previous
  $('.step-content .step-content-foot button[name="prev"]').on('click', function() {
    var instance = $(this);
    $(stepItem[step]).removeClass('active');
    if (step == (stepItem.length - 1)) {
      instance.siblings('button[name="next"]').removeClass('out');
      instance.siblings('button[name="finish"]').addClass('out');
    }
    $('.step-content-body').addClass('out');
    $('#' + stepItem[step].dataset.id).removeClass('out');
    if (step <= 0) {
      return;
    }
    step--;
  });
});


// Breadcrumbs

$('£navbarmain a').on('click', function() {
  var $this = $(this),
      $bc = $('<div id="navbarmain"></div>');

  $this.parents('li').each(function(n, li) {
      var $a = $(li).children('a').clone();
      $bc.prepend(' / ', $a);
  });
    $('.breadcrumb').html( $bc.prepend('<a href="#home">Home</a>') );
    return false;
}) 





///TIMELINE

var Timeline = function(elem) {
  this.elem = document.querySelector(elem);
  this.currentSlideIndex = 1;
  this.countSlides = null;
  this.slideWidth = null;
  this.paddingLR = 48;
  this.scrollZones = null;
  
  this.build();
};

// Build
Timeline.prototype.build = function() {
  const instance = this;
  
  // Get number of slides
  instance.countSlides = instance.elem.querySelectorAll(".timeline-slide").length;
  
  // Fix measures of elements
  instance.fixMeasures();
  
  // Set listeners
  instance.setEventListeners();
};

Timeline.prototype.setEventListeners = function() {
  const instance = this;
  
  // Add dot listeners 
  var dot = instance.elem.querySelectorAll(".timeline-dot");
  for (var i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function(event){
      var targetSlideIndex = this.getAttribute('data-slide-index');
      instance.changeSlide(targetSlideIndex, true);
    });
  }
  
  // Add arrow listeners
  var arrows = instance.elem.querySelectorAll(".timeline-arrow");
  var prevArrow = instance.elem.querySelector(".timeline-prev");
  var nextArrow = instance.elem.querySelector(".timeline-next");
  prevArrow.addEventListener("click", instance.prevSlide.bind(instance));
  nextArrow.addEventListener("click", instance.nextSlide.bind(instance));
  for (var i = 0; i < arrows.length; i++) {
    arrows[i].addEventListener("mousedown", function(e) { this.classList.add('active');})
    arrows[i].addEventListener("mouseup", function(e) { this.classList.remove('active');})
          }
  
  // Add resize listener
  window.addEventListener("resize", instance.resize.bind(instance));
  
  // Add scroll listener
  window.addEventListener("scroll", instance.scroll.bind(instance));
}

// Controls
Timeline.prototype.changeSlide = function(slideIndex, scroll) {
  const instance = this;
  
  // Update current slide
  slideIndex = parseInt(slideIndex);
  var targetSlide = instance.elem.querySelector('.timeline-slide:nth-child('+slideIndex+')');
  var currentSlide = instance.elem.querySelector('.timeline-slide:nth-child('+instance.currentSlideIndex+')');
  currentSlide.classList.remove("active");
  targetSlide.classList.add("active");
  instance.currentSlideIndex = slideIndex;
  
  if (window.innerWidth >= 768) {  
    // Translate to slide
    var translateX = (slideIndex-1) * instance.slideWidth;
    var track = instance.elem.querySelector('.timeline-track');
    track.style.transform = 'translate3d(-' + translateX +'px, 0px, 0px)';
  } else if (scroll) {
    // Scroll to slide
    var bbox = targetSlide.getBoundingClientRect();
    console.log('top', bbox.top);
    window.scrollTo({ top: bbox.top + window.scrollY - 20, behavior: 'smooth'});
  }

  // Update active dot
  var targetDot = instance.elem.querySelector('.timeline-dots .timeline-dot:nth-child('+slideIndex+')');
  var timelineDotActive = instance.elem.querySelectorAll('.timeline-dot.active');
  for (var i = 0; i < timelineDotActive.length; i++) {
    timelineDotActive[i].classList.remove("active");
  }
  targetDot.classList.add("active");
  targetSlide.querySelector('.timeline-dot').classList.add("active");
  
  // Show and Hide arrow controls
  var prevArrow = instance.elem.querySelector('.timeline-prev.timeline-arrow');
  var nextArrow = instance.elem.querySelector('.timeline-next.timeline-arrow');
  if (slideIndex === 1) {
    nextArrow.classList.remove("hide");
    prevArrow.classList.add("hide");
  } else if (slideIndex === instance.countSlides) {
    prevArrow.classList.remove("hide");
    nextArrow.classList.add("hide");
  } else {
    prevArrow.classList.remove("hide");
    nextArrow.classList.remove("hide");
  }
}

Timeline.prototype.prevSlide = function() {
  const instance = this;
  
  var prevSlideIndex = instance.currentSlideIndex - 1;
  prevSlideIndex = prevSlideIndex < 1 ? instance.countSlides : prevSlideIndex;
  instance.changeSlide(prevSlideIndex);
}

Timeline.prototype.nextSlide = function() {
  const instance = this;
  var nextSlideIndex = instance.currentSlideIndex + 1;
  nextSlideIndex = nextSlideIndex > instance.countSlides ? 1 : nextSlideIndex;
  instance.changeSlide(nextSlideIndex);
}

// Listeners
Timeline.prototype.resize = function() {
  const instance = this;
  
  var parentWidth = instance.elem.parentNode.clientWidth;
  if (parentWidth !== instance.slideWidth) {
    instance.fixMeasures(); 
    instance.changeSlide(instance.currentSlideIndex);
  }
}

Timeline.prototype.scroll = function() {
  const instance = this;
    
  if (window.innerWidth < 768) {
    var scrollLine = window.scrollY + (window.innerHeight / 2);
    for (var i = 0; i < instance.scrollZones.length; i++) {
      if (scrollLine >= instance.scrollZones[i].top &&
          scrollLine < instance.scrollZones[i].bottom) {
        instance.changeSlide(i+1, false);
        break;
      } 
    }
  }
}

// Utils
Timeline.prototype.fixMeasures = function() {
  const instance = this;

  // Get slides
  var slides = instance.elem.querySelectorAll(".timeline-slide");
  var track = instance.elem.querySelector('.timeline-track');
  var years = instance.elem.querySelectorAll(".timeline-year");

  if (window.innerWidth >= 768) {
    // Get slide width
    var parent = instance.elem.parentNode;
    var parentStyles = window.getComputedStyle(parent);
    var parentPaddingL = parseInt(parentStyles.getPropertyValue('padding-left'));
    var parentPaddingR = parseInt(parentStyles.getPropertyValue('padding-right'));
    instance.slideWidth = parent.clientWidth - parentPaddingL - parentPaddingR - (2 * instance.paddingLR);

    // Set track width
    track.style.width = (instance.countSlides * instance.slideWidth) + 'px';

    // Set slide width
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.width = instance.slideWidth + 'px';
    }
    
    // Set year width
    var yearWidth = instance.slideWidth / instance.countSlides;
    for (var i = 0; i < years.length; i++) {
      years[i].style.width = yearWidth + 'px';
      years[i].style.left = -(yearWidth / 2) + 10 + 'px';
    }
    
  } else {
    // Set width and tranform of track
    track.style.width = '100%';
    track.style.transform = 'translate3d(0px, 0px, 0px)';

    // Set slide width
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.width = '100%';
    }
    
    // Set year width
    
    for (var i = 0; i < years.length; i++) {
      years[i].style.width = track.offsetWidth - 30 + 'px';
      years[i].style.left = '30px'
    }
    
    // Update scroll zones
    instance.updateScrollZones();
  }
}

Timeline.prototype.updateScrollZones = function() {
  const instance = this;
  
  var slides = instance.elem.querySelectorAll(".timeline-slide");
  instance.scrollZones = [];
  for (var i = 0; i < slides.length; i++) {
    var bbox = slides[i].getBoundingClientRect();
    instance.scrollZones[i] = {
      'top': bbox.top + window.scrollY, 'bottom': bbox.bottom + window.scrollY
    };
  }
  
  console.log('zones', instance.scrollZones);
}


var timeline = new Timeline('.timeline');
// setInterval(function(){
//   timeline.nextSlide();
// }, 3000);
