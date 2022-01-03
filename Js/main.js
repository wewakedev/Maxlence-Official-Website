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

$('body').on('click', '.filter__headitem', function() {
    let ele = $(this)
    let filterData = ele.attr('filter-data')
    
    // Reset head
    ele.parent().children().removeClass('active')
   
    // Active head
    ele.addClass('active')
    
    // Reset body
    $('.filter__bodyitem').removeClass('active')
   
    // Active body
    $('.filter__bodyitem[filter-data*="[' +filterData+ ',"], .filter__bodyitem[filter-data*=",' +filterData+ ',"], .filter__bodyitem[filter-data*=",' +filterData+ ']"]').addClass('active')
 })
 
 $('.filter__headitem').first().click()

//  Testimonial Slider


$('.carousel').slick({
    dots:true,
    arrows:true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
  
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
