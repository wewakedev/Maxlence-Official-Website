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


  $('.designlogocarousel').slick({
    dots:true,
    arrows:true,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
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
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });


  $('.designtabcarousel').slick({
    dots:false,
    arrows:true,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
  
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          centerPadding: '10px',
          slidesToShow: 3
        }
      }
    ]
  });




  $(document).ready(function(){
    $('.designcommonslider').slick({
      dots:true,
        arrows:true,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: false,
        autoplaySpeed: 3000,
      
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: true,
              dots: true,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: true,
              dots: true,
              centerMode: false,
              centerPadding: '40px',
              slidesToShow: 2,
            }
          }
        ]
    });
  });
  
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    $('.designcommonslider').slick('setPosition');
  });
  
  
  function myFunction(id) {
    var checkBox = document.getElementById(id);
    var text = document.getElementById(id+"_content");
    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  }

  
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


$('body').on("click", ".dropdown-menu", function (e) {
  $(this).parent().is(".open") && e.stopPropagation();
});

$('.selectall').click(function() {
  if ($(this).is(':checked')) {
      $('.option').prop('checked', true);
      var total = $('input[name="options[]"]:checked').length;
      $(".dropdown-text").html('(' + total + ') Selected');
      $(".select-text").html(' Deselect');
  } else {
      $('.option').prop('checked', false);
      $(".dropdown-text").html('(0) Selected');
      $(".select-text").html(' Select');
  }
});

$("input[type='checkbox'].justone").change(function(){
  var a = $("input[type='checkbox'].justone");
  if(a.length == a.filter(":checked").length){
      $('.selectall').prop('checked', true);
      $(".select-text").html(' Deselect');
  }
  else {
      $('.selectall').prop('checked', false);
      $(".select-text").html(' Select');
  }
var total = $('input[name="options[]"]:checked').length;
$(".dropdown-text").html('(' + total + ') Selected');
});



// Contact Form File Upload

// Design By
// - https://dribbble.com/shots/13992184-File-Uploader-Drag-Drop

// Select Upload-Area
const uploadArea = document.querySelector('#uploadArea')

// Select Drop-Zoon Area
const dropZoon = document.querySelector('#dropZoon');

// Loading Text
const loadingText = document.querySelector('#loadingText');

// Slect File Input 
const fileInput = document.querySelector('#fileInput');

// Select Preview Image
const previewImage = document.querySelector('#previewImage');

// File-Details Area
const fileDetails = document.querySelector('#fileDetails');

// Uploaded File
const uploadedFile = document.querySelector('#uploadedFile');

// Uploaded File Info
const uploadedFileInfo = document.querySelector('#uploadedFileInfo');

// Uploaded File  Name
const uploadedFileName = document.querySelector('.uploaded-file__name');

// Uploaded File Icon
const uploadedFileIconText = document.querySelector('.uploaded-file__icon-text');

// Uploaded File Counter
const uploadedFileCounter = document.querySelector('.uploaded-file__counter');

// ToolTip Data
const toolTipData = document.querySelector('.upload-area__tooltip-data');

// Images Types
const imagesTypes = [
  "jpeg",
  "png",
  "svg",
  "gif"
];

// Append Images Types Array Inisde Tooltip Data
toolTipData.innerHTML = [...imagesTypes].join(', .');

// When (drop-zoon) has (dragover) Event 
dropZoon.addEventListener('dragover', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Add Class (drop-zoon--over) On (drop-zoon)
  dropZoon.classList.add('drop-zoon--over');
});

// When (drop-zoon) has (dragleave) Event 
dropZoon.addEventListener('dragleave', function (event) {
  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon.classList.remove('drop-zoon--over');
});

// When (drop-zoon) has (drop) Event 
dropZoon.addEventListener('drop', function (event) {
  // Prevent Default Behavior 
  event.preventDefault();

  // Remove Class (drop-zoon--over) from (drop-zoon)
  dropZoon.classList.remove('drop-zoon--over');

  // Select The Dropped File
  const file = event.dataTransfer.files[0];

  // Call Function uploadFile(), And Send To Her The Dropped File :)
  uploadFile(file);
});

// When (drop-zoon) has (click) Event 
dropZoon.addEventListener('click', function (event) {
  // Click The (fileInput)
  fileInput.click();
});

// When (fileInput) has (change) Event 
fileInput.addEventListener('change', function (event) {
  // Select The Chosen File
  const file = event.target.files[0];

  // Call Function uploadFile(), And Send To Her The Chosen File :)
  uploadFile(file);
});

// Upload File Function
function uploadFile(file) {
  // FileReader()
  const fileReader = new FileReader();
  // File Type 
  const fileType = file.type;
  // File Size 
  const fileSize = file.size;

  // If File Is Passed from the (File Validation) Function
  if (fileValidate(fileType, fileSize)) {
    // Add Class (drop-zoon--Uploaded) on (drop-zoon)
    dropZoon.classList.add('drop-zoon--Uploaded');

    // Show Loading-text
    loadingText.style.display = "block";
    // Hide Preview Image
    previewImage.style.display = 'none';

    // Remove Class (uploaded-file--open) From (uploadedFile)
    uploadedFile.classList.remove('uploaded-file--open');
    // Remove Class (uploaded-file__info--active) from (uploadedFileInfo)
    uploadedFileInfo.classList.remove('uploaded-file__info--active');

    // After File Reader Loaded 
    fileReader.addEventListener('load', function () {
      // After Half Second 
      setTimeout(function () {
        // Add Class (upload-area--open) On (uploadArea)
        uploadArea.classList.add('upload-area--open');

        // Hide Loading-text (please-wait) Element
        loadingText.style.display = "none";
        // Show Preview Image
        previewImage.style.display = 'block';

        // Add Class (file-details--open) On (fileDetails)
        fileDetails.classList.add('file-details--open');
        // Add Class (uploaded-file--open) On (uploadedFile)
        uploadedFile.classList.add('uploaded-file--open');
        // Add Class (uploaded-file__info--active) On (uploadedFileInfo)
        uploadedFileInfo.classList.add('uploaded-file__info--active');
      }, 500); // 0.5s

      // Add The (fileReader) Result Inside (previewImage) Source
      previewImage.setAttribute('src', fileReader.result);

      // Add File Name Inside Uploaded File Name
      uploadedFileName.innerHTML = file.name;

      // Call Function progressMove();
      progressMove();
    });

    // Read (file) As Data Url 
    fileReader.readAsDataURL(file);
  } else { // Else

    this; // (this) Represent The fileValidate(fileType, fileSize) Function

  };
};

// Progress Counter Increase Function
function progressMove() {
  // Counter Start
  let counter = 0;

  // After 600ms 
  setTimeout(() => {
    // Every 100ms
    let counterIncrease = setInterval(() => {
      // If (counter) is equle 100 
      if (counter === 100) {
        // Stop (Counter Increase)
        clearInterval(counterIncrease);
      } else { // Else
        // plus 10 on counter
        counter = counter + 10;
        // add (counter) vlaue inisde (uploadedFileCounter)
        uploadedFileCounter.innerHTML = `${counter}%`
      }
    }, 100);
  }, 600);
};


// Simple File Validate Function
function fileValidate(fileType, fileSize) {
  // File Type Validation
  let isImage = imagesTypes.filter((type) => fileType.indexOf(`image/${type}`) !== -1);

  // If The Uploaded File Type Is 'jpeg'
  if (isImage[0] === 'jpeg') {
    // Add Inisde (uploadedFileIconText) The (jpg) Value
    uploadedFileIconText.innerHTML = 'jpg';
  } else { // else
    // Add Inisde (uploadedFileIconText) The Uploaded File Type 
    uploadedFileIconText.innerHTML = isImage[0];
  };

  // If The Uploaded File Is An Image
  if (isImage.length !== 0) {
    // Check, If File Size Is 2MB or Less
    if (fileSize <= 2000000) { // 2MB :)
      return true;
    } else { // Else File Size
      return alert('Please Your File Should be 2 Megabytes or Less');
    };
  } else { // Else File Type 
    return alert('Please make sure to upload An Image File Type');
  };
};

// :)

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
