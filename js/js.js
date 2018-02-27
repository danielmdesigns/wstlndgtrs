$(document).ready(function(){

"use strict";
  
// Menu
$('#js-toggle').on('click', function(){
  $('nav ul').toggleClass('showing');
});
  
// Quote
var commentSlider = {
  config: {
    container: $("#quote")
  },

  init: function(config){
    if(config && typeof config === "object"){
      $.extend(commentSlider.config, config);
    }

    //caching dom elements
    //wrapper
    commentSlider.$container = commentSlider.config.container;

    //first p tag within module wrapper
    commentSlider.$firstParagraph = commentSlider.$container.find(
      "p:first-child"
    );

    //setting first paragraph tag with .active class
    commentSlider.$firstParagraph.addClass("activeText");
  }
};

//initializes the entire thing by calling the init function
$(document).ready(commentSlider.init);

$(document).ready(function() {
  $(".owl-carousel").owlCarousel({
    autoPlay: 4000,
    slideSpeed: 1000,
    navigation: false,
    pagination: true,
    singleItem: true,
    dots: false,
    autoHeight: true
  });
});

  
});
