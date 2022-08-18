//  navbar
$(document).ready(function () {
  if ($(window).width() > 991) {
    $(".navbar-light .d-menu").hover(
      function () {
        $(this).find(".sm-menu").first().stop(true, true).slideDown(150);
      },
      function () {
        $(this)
          .find(".sm-menu")
          .first()
          .stop(true, true)
          .delay(120)
          .slideUp(100);
      }
    );
  }
});

//Dropdown//

$(document).ready(function () {
  //DropDown input - select
  $(".t-dropdown-input").on("click", function () {
    $(this).parent().next().slideDown("fast");
  });

  $(".t-select-btn").on("click", function () {
    $(".t-dropdown-list").slideUp("fast");

    if (!$(this).prev().attr("disabled")) {
      $(this).prev().trigger("click");
    }
  });

  $(".t-dropdown-input").width(
    $(".t-dropdown-select").width() - $(".t-select-btn").width() - 13
  );

  $(".t-dropdown-list").width($(".t-dropdown-select").width());

  $(".t-dropdown-input").val("");

  $("li.t-dropdown-item").on("click", function () {
    var text = $(this).html();
    $(this).parent().prev().find(".t-dropdown-input").val(text);
    $(".t-dropdown-list").slideUp("fast");
  });

  $(document).on("click", function (event) {
    if ($(event.target).closest(".t-dropdown-input, .t-select-btn").length)
      return;
    $(".t-dropdown-list").slideUp("fast");
    event.stopPropagation();
  });
  // END //
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

$(".threewaysteps").slick({
  dots: false,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: false,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "20px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});

$(".carouselthreeway").slick({
  dots: true,
  arrows: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 1000,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});

$(".singleslide").slick({
  dots: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: true,
        centerMode: false,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1,
      },
    },
  ],
});

$(".designlogocarousel").slick({
  dots: true,
  arrows: true,
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
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});

$(".designtabcarousel").slick({
  dots: false,
  arrows: true,
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
        centerPadding: "40px",
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: false,
        centerPadding: "10px",
        slidesToShow: 3,
      },
    },
  ],
});

$(document).ready(function () {
  $(".designcommonslider").slick({
    dots: true,
    arrows: true,
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
          centerPadding: "40px",
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          dots: true,
          centerMode: false,
          centerPadding: "40px",
          slidesToShow: 2,
        },
      },
    ],
  });
});

$('a[data-toggle="tab"]').on("shown.bs.tab", function (e) {
  $(".designcommonslider").slick("setPosition");
});

function myFunction(id) {
  var checkBox = document.getElementById(id);
  var content = document.getElementById(id + "_content");
  if (checkBox.checked == true) {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}

// Homesection Fade In Content

var homeherofades = $(".homeherofades");
var homeherofadesIndex = -1;

function showNexthomefade() {
  ++homeherofadesIndex;
  homeherofades
    .eq(homeherofadesIndex % homeherofades.length)
    .fadeIn(2000)
    .delay(2000)
    .fadeOut(2000, showNexthomefade);
}

showNexthomefade();

var homelogofades = $(".homelogofades");
var homelogofadesIndex = -1;

function showNextlogofades() {
  ++homelogofadesIndex;
  homelogofades
    .eq(homelogofadesIndex % homelogofades.length)
    .fadeIn(2000)
    .delay(2000)
    .fadeOut(2000, showNextlogofades);
}

showNextlogofades();

//FAQ

let faqquestion = document.querySelectorAll(".faqquestion");

faqquestion.forEach((faqquestion) => {
  faqquestion.addEventListener("click", (event) => {
    const active = document.querySelector(".faqquestion.active");
    if (active && active !== faqquestion) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    faqquestion.classList.toggle("active");
    const answer = faqquestion.nextElementSibling;
    if (faqquestion.classList.contains("active")) {
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  });
});

// Timeline MAxlence

jQuery(document).ready(function ($) {
  var timelines = $(".cd-horizontal-timeline"),
    eventsMinDistance = 60;

  timelines.length > 0 && initTimeline(timelines);

  function initTimeline(timelines) {
    timelines.each(function () {
      var timeline = $(this),
        timelineComponents = {};
      //cache timeline components
      timelineComponents["timelineWrapper"] = timeline.find(".events-wrapper");
      timelineComponents["eventsWrapper"] =
        timelineComponents["timelineWrapper"].children(".events");
      timelineComponents["fillingLine"] =
        timelineComponents["eventsWrapper"].children(".filling-line");
      timelineComponents["timelineEvents"] =
        timelineComponents["eventsWrapper"].find("a");
      timelineComponents["timelineDates"] = parseDate(
        timelineComponents["timelineEvents"]
      );
      timelineComponents["eventsMinLapse"] = minLapse(
        timelineComponents["timelineDates"]
      );
      timelineComponents["timelineNavigation"] = timeline.find(
        ".cd-timeline-navigation"
      );
      timelineComponents["eventsContent"] =
        timeline.children(".events-content");

      //assign a left postion to the single events along the timeline
      setDatePosition(timelineComponents, eventsMinDistance);
      //assign a width to the timeline
      var timelineTotWidth = setTimelineWidth(
        timelineComponents,
        eventsMinDistance
      );
      //the timeline has been initialize - show it
      timeline.addClass("loaded");

      //detect click on the next arrow
      timelineComponents["timelineNavigation"].on(
        "click",
        ".next",
        function (event) {
          event.preventDefault();
          updateSlide(timelineComponents, timelineTotWidth, "next");
        }
      );
      //detect click on the prev arrow
      timelineComponents["timelineNavigation"].on(
        "click",
        ".prev",
        function (event) {
          event.preventDefault();
          updateSlide(timelineComponents, timelineTotWidth, "prev");
        }
      );
      //detect click on the a single event - show new event content
      timelineComponents["eventsWrapper"].on("click", "a", function (event) {
        event.preventDefault();
        timelineComponents["timelineEvents"].removeClass("selected");
        $(this).addClass("selected");
        updateOlderEvents($(this));
        updateFilling(
          $(this),
          timelineComponents["fillingLine"],
          timelineTotWidth
        );
        updateVisibleContent($(this), timelineComponents["eventsContent"]);
      });

      //on swipe, show next/prev event content
      timelineComponents["eventsContent"].on("swipeleft", function () {
        var mq = checkMQ();
        mq == "mobile" &&
          showNewContent(timelineComponents, timelineTotWidth, "next");
      });
      timelineComponents["eventsContent"].on("swiperight", function () {
        var mq = checkMQ();
        mq == "mobile" &&
          showNewContent(timelineComponents, timelineTotWidth, "prev");
      });

      //keyboard navigation
      $(document).keyup(function (event) {
        if (event.which == "37" && elementInViewport(timeline.get(0))) {
          showNewContent(timelineComponents, timelineTotWidth, "prev");
        } else if (event.which == "39" && elementInViewport(timeline.get(0))) {
          showNewContent(timelineComponents, timelineTotWidth, "next");
        }
      });
    });
  }

  function updateSlide(timelineComponents, timelineTotWidth, string) {
    //retrieve translateX value of timelineComponents['eventsWrapper']
    var translateValue = getTranslateValue(timelineComponents["eventsWrapper"]),
      wrapperWidth = Number(
        timelineComponents["timelineWrapper"].css("width").replace("px", "")
      );
    //translate the timeline to the left('next')/right('prev')
    string == "next"
      ? translateTimeline(
          timelineComponents,
          translateValue - wrapperWidth + eventsMinDistance,
          wrapperWidth - timelineTotWidth
        )
      : translateTimeline(
          timelineComponents,
          translateValue + wrapperWidth - eventsMinDistance
        );
  }

  function showNewContent(timelineComponents, timelineTotWidth, string) {
    //go from one event to the next/previous one
    var visibleContent = timelineComponents["eventsContent"].find(".selected"),
      newContent =
        string == "next" ? visibleContent.next() : visibleContent.prev();

    if (newContent.length > 0) {
      //if there's a next/prev event - show it
      var selectedDate = timelineComponents["eventsWrapper"].find(".selected"),
        newEvent =
          string == "next"
            ? selectedDate.parent("li").next("li").children("a")
            : selectedDate.parent("li").prev("li").children("a");

      updateFilling(
        newEvent,
        timelineComponents["fillingLine"],
        timelineTotWidth
      );
      updateVisibleContent(newEvent, timelineComponents["eventsContent"]);
      newEvent.addClass("selected");
      selectedDate.removeClass("selected");
      updateOlderEvents(newEvent);
      updateTimelinePosition(
        string,
        newEvent,
        timelineComponents,
        timelineTotWidth
      );
    }
  }

  function updateTimelinePosition(
    string,
    event,
    timelineComponents,
    timelineTotWidth
  ) {
    //translate timeline to the left/right according to the position of the selected event
    var eventStyle = window.getComputedStyle(event.get(0), null),
      eventLeft = Number(eventStyle.getPropertyValue("left").replace("px", "")),
      timelineWidth = Number(
        timelineComponents["timelineWrapper"].css("width").replace("px", "")
      ),
      timelineTotWidth = Number(
        timelineComponents["eventsWrapper"].css("width").replace("px", "")
      );
    var timelineTranslate = getTranslateValue(
      timelineComponents["eventsWrapper"]
    );

    if (
      (string == "next" && eventLeft > timelineWidth - timelineTranslate) ||
      (string == "prev" && eventLeft < -timelineTranslate)
    ) {
      translateTimeline(
        timelineComponents,
        -eventLeft + timelineWidth / 2,
        timelineWidth - timelineTotWidth
      );
    }
  }

  function translateTimeline(timelineComponents, value, totWidth) {
    var eventsWrapper = timelineComponents["eventsWrapper"].get(0);
    value = value > 0 ? 0 : value; //only negative translate value
    value =
      !(typeof totWidth === "undefined") && value < totWidth ? totWidth : value; //do not translate more than timeline width
    setTransformValue(eventsWrapper, "translateX", value + "px");
    //update navigation arrows visibility
    value == 0
      ? timelineComponents["timelineNavigation"]
          .find(".prev")
          .addClass("inactive")
      : timelineComponents["timelineNavigation"]
          .find(".prev")
          .removeClass("inactive");
    value == totWidth
      ? timelineComponents["timelineNavigation"]
          .find(".next")
          .addClass("inactive")
      : timelineComponents["timelineNavigation"]
          .find(".next")
          .removeClass("inactive");
  }

  function updateFilling(selectedEvent, filling, totWidth) {
    //change .filling-line length according to the selected event
    var eventStyle = window.getComputedStyle(selectedEvent.get(0), null),
      eventLeft = eventStyle.getPropertyValue("left"),
      eventWidth = eventStyle.getPropertyValue("width");
    eventLeft =
      Number(eventLeft.replace("px", "")) +
      Number(eventWidth.replace("px", "")) / 2;
    var scaleValue = eventLeft / totWidth;
    setTransformValue(filling.get(0), "scaleX", scaleValue);
  }

  function setDatePosition(timelineComponents, min) {
    for (i = 0; i < timelineComponents["timelineDates"].length; i++) {
      var distance = daydiff(
          timelineComponents["timelineDates"][0],
          timelineComponents["timelineDates"][i]
        ),
        distanceNorm =
          Math.round(distance / timelineComponents["eventsMinLapse"]) + 2;
      timelineComponents["timelineEvents"]
        .eq(i)
        .css("left", distanceNorm * min + "px");
    }
  }

  function setTimelineWidth(timelineComponents, width) {
    var timeSpan = daydiff(
        timelineComponents["timelineDates"][0],
        timelineComponents["timelineDates"][
          timelineComponents["timelineDates"].length - 1
        ]
      ),
      timeSpanNorm = timeSpan / timelineComponents["eventsMinLapse"],
      timeSpanNorm = Math.round(timeSpanNorm) + 4,
      totalWidth = timeSpanNorm * width;
    timelineComponents["eventsWrapper"].css("width", totalWidth + "px");
    updateFilling(
      timelineComponents["timelineEvents"].eq(0),
      timelineComponents["fillingLine"],
      totalWidth
    );

    return totalWidth;
  }

  function updateVisibleContent(event, eventsContent) {
    var eventDate = event.data("date"),
      visibleContent = eventsContent.find(".selected"),
      selectedContent = eventsContent.find('[data-date="' + eventDate + '"]'),
      selectedContentHeight = selectedContent.height();

    if (selectedContent.index() > visibleContent.index()) {
      var classEnetering = "selected enter-right",
        classLeaving = "leave-left";
    } else {
      var classEnetering = "selected enter-left",
        classLeaving = "leave-right";
    }

    selectedContent.attr("class", classEnetering);
    visibleContent
      .attr("class", classLeaving)
      .one(
        "webkitAnimationEnd oanimationend msAnimationEnd animationend",
        function () {
          visibleContent.removeClass("leave-right leave-left");
          selectedContent.removeClass("enter-left enter-right");
        }
      );
    eventsContent.css("height", selectedContentHeight + "px");
  }

  function updateOlderEvents(event) {
    event
      .parent("li")
      .prevAll("li")
      .children("a")
      .addClass("older-event")
      .end()
      .end()
      .nextAll("li")
      .children("a")
      .removeClass("older-event");
  }

  function getTranslateValue(timeline) {
    var timelineStyle = window.getComputedStyle(timeline.get(0), null),
      timelineTranslate =
        timelineStyle.getPropertyValue("-webkit-transform") ||
        timelineStyle.getPropertyValue("-moz-transform") ||
        timelineStyle.getPropertyValue("-ms-transform") ||
        timelineStyle.getPropertyValue("-o-transform") ||
        timelineStyle.getPropertyValue("transform");

    if (timelineTranslate.indexOf("(") >= 0) {
      var timelineTranslate = timelineTranslate.split("(")[1];
      timelineTranslate = timelineTranslate.split(")")[0];
      timelineTranslate = timelineTranslate.split(",");
      var translateValue = timelineTranslate[4];
    } else {
      var translateValue = 0;
    }

    return Number(translateValue);
  }

  function setTransformValue(element, property, value) {
    element.style["-webkit-transform"] = property + "(" + value + ")";
    element.style["-moz-transform"] = property + "(" + value + ")";
    element.style["-ms-transform"] = property + "(" + value + ")";
    element.style["-o-transform"] = property + "(" + value + ")";
    element.style["transform"] = property + "(" + value + ")";
  }

  //based on http://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
  function parseDate(events) {
    var dateArrays = [];
    events.each(function () {
      var dateComp = $(this).data("date").split("/"),
        newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
      dateArrays.push(newDate);
    });
    return dateArrays;
  }

  function parseDate2(events) {
    var dateArrays = [];
    events.each(function () {
      var singleDate = $(this),
        dateComp = singleDate.data("date").split("T");
      if (dateComp.length > 1) {
        //both DD/MM/YEAR and time are provided
        var dayComp = dateComp[0].split("/"),
          timeComp = dateComp[1].split(":");
      } else if (dateComp[0].indexOf(":") >= 0) {
        //only time is provide
        var dayComp = ["2000", "0", "0"],
          timeComp = dateComp[0].split(":");
      } else {
        //only DD/MM/YEAR
        var dayComp = dateComp[0].split("/"),
          timeComp = ["0", "0"];
      }
      var newDate = new Date(
        dayComp[2],
        dayComp[1] - 1,
        dayComp[0],
        timeComp[0],
        timeComp[1]
      );
      dateArrays.push(newDate);
    });
    return dateArrays;
  }

  function daydiff(first, second) {
    return Math.round(second - first);
  }

  function minLapse(dates) {
    //determine the minimum distance among events
    var dateDistances = [];
    for (i = 1; i < dates.length; i++) {
      var distance = daydiff(dates[i - 1], dates[i]);
      dateDistances.push(distance);
    }
    return Math.min.apply(null, dateDistances);
  }

  /*
      How to tell if a DOM element is visible in the current viewport?
      http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  */
  function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
      el = el.offsetParent;
      top += el.offsetTop;
      left += el.offsetLeft;
    }

    return (
      top < window.pageYOffset + window.innerHeight &&
      left < window.pageXOffset + window.innerWidth &&
      top + height > window.pageYOffset &&
      left + width > window.pageXOffset
    );
  }

  function checkMQ() {
    //check if mobile or desktop device
    return window
      .getComputedStyle(
        document.querySelector(".cd-horizontal-timeline"),
        "::before"
      )
      .getPropertyValue("content")
      .replace(/'/g, "")
      .replace(/"/g, "");
  }
});

// View all

$("document").ready(function () {
  $("#link").click(function () {
    $a = $(this);
    var action = $a.data("action");
    if (action == "all") {
      $(".case").attr("checked", "true");
      $a.text("View less").data("action", "none");
    }
    if (action == "none") {
      $(".case").removeAttr("checked");
      $a.text("View all").data("action", "all");
    }
    updatecount();
    return false;
  });
  $(".case").click(function () {
    if ($(".case").length == $(".case:checked").length) {
      $("#link").text("None").data("action", "none");
    } else {
      $("#link").text("View all").data("action", "all");
    }
    updatecount();
  });
});
var updatecount = function () {
  $("#count").text($(".case:checked").length);
};

let el = $(".switch");
let cur = el.find(".current");
let options = el.find(".options li");
let content = $("#content");

// Open language dropdown panel

el.on("click", function (e) {
  el.addClass("show-options");

  setTimeout(function () {
    el.addClass("anim-options");
  }, 50);

  setTimeout(function () {
    el.addClass("show-shadow");
  }, 200);
});

$("body").on("click", ".dropdown-menu", function (e) {
  $(this).parent().is(".open") && e.stopPropagation();
});

$(".selectall").click(function () {
  if ($(this).is(":checked")) {
    $(".option").prop("checked", true);
    var total = $('input[name="options[]"]:checked').length;
    $(".dropdown-text").html("(" + total + ") Selected");
    $(".select-text").html(" Deselect");
  } else {
    $(".option").prop("checked", false);
    $(".dropdown-text").html("(0) Selected");
    $(".select-text").html(" Select");
  }
});

$("input[type='checkbox'].justone").change(function () {
  var a = $("input[type='checkbox'].justone");
  if (a.length == a.filter(":checked").length) {
    $(".selectall").prop("checked", true);
    $(".select-text").html(" Deselect");
  } else {
    $(".selectall").prop("checked", false);
    $(".select-text").html(" Select");
  }
  var total = $('input[name="options[]"]:checked').length;
  $(".dropdown-text").html("(" + total + ") Selected");
});

// Load more/ LEss
$(document).ready(function () {
  var list = $(".list .featcamp");
  var numToShow = 4;
  var button = $("#next");
  var numInList = list.length;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();

  button.click(function () {
    var showing = list.filter(":visible").length;
    list.slice(showing - 1, showing + numToShow).fadeIn();
    var nowShowing = list.filter(":visible").length;
    if (nowShowing >= numInList) {
      button.hide();
    }
  });
});
///Question feed

$(function () {
  var step = 0;
  var stepItem = $(".step-progress .step-slider .step-slider-item");

  // Step Next
  $('.step-content .step-content-foot button[name="next"]').on(
    "click",
    function () {
      var instance = $(this);
      if (stepItem.length - 1 < step) {
        return;
      }
      if (step == stepItem.length - 2) {
        instance.addClass("out");
        instance.siblings('button[name="finish"]').removeClass("out");
      }
      $(stepItem[step]).addClass("active");
      $(".step-content-body").addClass("out");
      $("#" + stepItem[step + 1].dataset.id).removeClass("out");
      step++;
    }
  );

  // Step Last
  $('.step-content .step-content-foot button[name="finish"]').on(
    "click",
    function () {
      if (step == stepItem.length) {
        return;
      }
      $(stepItem[stepItem.length - 1]).addClass("active");
      $(".step-content-body").addClass("out");
      $("#stepLast").removeClass("out");
    }
  );

  // Step Previous
  $('.step-content .step-content-foot button[name="prev"]').on(
    "click",
    function () {
      var instance = $(this);
      $(stepItem[step]).removeClass("active");
      if (step == stepItem.length - 1) {
        instance.siblings('button[name="next"]').removeClass("out");
        instance.siblings('button[name="finish"]').addClass("out");
      }
      $(".step-content-body").addClass("out");
      $("#" + stepItem[step].dataset.id).removeClass("out");
      if (step <= 0) {
        return;
      }
      step--;
    }
  );
});

// Breadcrumbs

$("£navbarmain a").on("click", function () {
  var $this = $(this),
    $bc = $('<div id="navbarmain"></div>');

  $this.parents("li").each(function (n, li) {
    var $a = $(li).children("a").clone();
    $bc.prepend(" / ", $a);
  });
  $(".breadcrumb").html($bc.prepend('<a href="#home">Home</a>'));
  return false;
});

///TIMELINE

var Timeline = function (elem) {
  this.elem = document.querySelector(elem);
  this.currentSlideIndex = 1;
  this.countSlides = null;
  this.slideWidth = null;
  this.paddingLR = 48;
  this.scrollZones = null;

  this.build();
};

// Build
Timeline.prototype.build = function () {
  const instance = this;

  // Get number of slides
  instance.countSlides =
    instance.elem.querySelectorAll(".timeline-slide").length;

  // Fix measures of elements
  instance.fixMeasures();

  // Set listeners
  instance.setEventListeners();
};

Timeline.prototype.setEventListeners = function () {
  const instance = this;

  // Add dot listeners
  var dot = instance.elem.querySelectorAll(".timeline-dot");
  for (var i = 0; i < dot.length; i++) {
    dot[i].addEventListener("click", function (event) {
      var targetSlideIndex = this.getAttribute("data-slide-index");
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
    arrows[i].addEventListener("mousedown", function (e) {
      this.classList.add("active");
    });
    arrows[i].addEventListener("mouseup", function (e) {
      this.classList.remove("active");
    });
  }

  // Add resize listener
  window.addEventListener("resize", instance.resize.bind(instance));

  // Add scroll listener
  window.addEventListener("scroll", instance.scroll.bind(instance));
};

// Controls
Timeline.prototype.changeSlide = function (slideIndex, scroll) {
  const instance = this;

  // Update current slide
  slideIndex = parseInt(slideIndex);
  var targetSlide = instance.elem.querySelector(
    ".timeline-slide:nth-child(" + slideIndex + ")"
  );
  var currentSlide = instance.elem.querySelector(
    ".timeline-slide:nth-child(" + instance.currentSlideIndex + ")"
  );
  currentSlide.classList.remove("active");
  targetSlide.classList.add("active");
  instance.currentSlideIndex = slideIndex;

  if (window.innerWidth >= 768) {
    // Translate to slide
    var translateX = (slideIndex - 1) * instance.slideWidth;
    var track = instance.elem.querySelector(".timeline-track");
    track.style.transform = "translate3d(-" + translateX + "px, 0px, 0px)";
  } else if (scroll) {
    // Scroll to slide
    var bbox = targetSlide.getBoundingClientRect();
    console.log("top", bbox.top);
    window.scrollTo({
      top: bbox.top + window.scrollY - 20,
      behavior: "smooth",
    });
  }

  // Update active dot
  var targetDot = instance.elem.querySelector(
    ".timeline-dots .timeline-dot:nth-child(" + slideIndex + ")"
  );
  var timelineDotActive = instance.elem.querySelectorAll(
    ".timeline-dot.active"
  );
  for (var i = 0; i < timelineDotActive.length; i++) {
    timelineDotActive[i].classList.remove("active");
  }
  targetDot.classList.add("active");
  targetSlide.querySelector(".timeline-dot").classList.add("active");

  // Show and Hide arrow controls
  var prevArrow = instance.elem.querySelector(".timeline-prev.timeline-arrow");
  var nextArrow = instance.elem.querySelector(".timeline-next.timeline-arrow");
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
};

Timeline.prototype.prevSlide = function () {
  const instance = this;

  var prevSlideIndex = instance.currentSlideIndex - 1;
  prevSlideIndex = prevSlideIndex < 1 ? instance.countSlides : prevSlideIndex;
  instance.changeSlide(prevSlideIndex);
};

Timeline.prototype.nextSlide = function () {
  const instance = this;
  var nextSlideIndex = instance.currentSlideIndex + 1;
  nextSlideIndex = nextSlideIndex > instance.countSlides ? 1 : nextSlideIndex;
  instance.changeSlide(nextSlideIndex);
};

// Listeners
Timeline.prototype.resize = function () {
  const instance = this;

  var parentWidth = instance.elem.parentNode.clientWidth;
  if (parentWidth !== instance.slideWidth) {
    instance.fixMeasures();
    instance.changeSlide(instance.currentSlideIndex);
  }
};

Timeline.prototype.scroll = function () {
  const instance = this;

  if (window.innerWidth < 768) {
    var scrollLine = window.scrollY + window.innerHeight / 2;
    for (var i = 0; i < instance.scrollZones.length; i++) {
      if (
        scrollLine >= instance.scrollZones[i].top &&
        scrollLine < instance.scrollZones[i].bottom
      ) {
        instance.changeSlide(i + 1, false);
        break;
      }
    }
  }
};

// Utils
Timeline.prototype.fixMeasures = function () {
  const instance = this;

  // Get slides
  var slides = instance.elem.querySelectorAll(".timeline-slide");
  var track = instance.elem.querySelector(".timeline-track");
  var years = instance.elem.querySelectorAll(".timeline-year");

  if (window.innerWidth >= 768) {
    // Get slide width
    var parent = instance.elem.parentNode;
    var parentStyles = window.getComputedStyle(parent);
    var parentPaddingL = parseInt(
      parentStyles.getPropertyValue("padding-left")
    );
    var parentPaddingR = parseInt(
      parentStyles.getPropertyValue("padding-right")
    );
    instance.slideWidth =
      parent.clientWidth -
      parentPaddingL -
      parentPaddingR -
      2 * instance.paddingLR;

    // Set track width
    track.style.width = instance.countSlides * instance.slideWidth + "px";

    // Set slide width
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.width = instance.slideWidth + "px";
    }

    // Set year width
    var yearWidth = instance.slideWidth / instance.countSlides;
    for (var i = 0; i < years.length; i++) {
      years[i].style.width = yearWidth + "px";
      years[i].style.left = -(yearWidth / 2) + 10 + "px";
    }
  } else {
    // Set width and tranform of track
    track.style.width = "100%";
    track.style.transform = "translate3d(0px, 0px, 0px)";

    // Set slide width
    for (var i = 0; i < slides.length; i++) {
      slides[i].style.width = "100%";
    }

    // Set year width

    for (var i = 0; i < years.length; i++) {
      years[i].style.width = track.offsetWidth - 30 + "px";
      years[i].style.left = "30px";
    }

    // Update scroll zones
    instance.updateScrollZones();
  }
};

Timeline.prototype.updateScrollZones = function () {
  const instance = this;

  var slides = instance.elem.querySelectorAll(".timeline-slide");
  instance.scrollZones = [];
  for (var i = 0; i < slides.length; i++) {
    var bbox = slides[i].getBoundingClientRect();
    instance.scrollZones[i] = {
      top: bbox.top + window.scrollY,
      bottom: bbox.bottom + window.scrollY,
    };
  }

  console.log("zones", instance.scrollZones);
};

var timeline = new Timeline(".timeline");
// setInterval(function(){
//   timeline.nextSlide();
// }, 3000);

// QUEST
