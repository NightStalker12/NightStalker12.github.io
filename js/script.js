import {openService, openServiceGet} from './functions.js'

$(document).ready(function(){
  $(function() {
    $(".link").mouseenter(function() {
      $(this).find(".img-wrapper-active_effect, .img-wrapper-active_effect2").fadeIn(250);
    }).mouseleave(function() {
      $(this).find(".img-wrapper-active_effect, .img-wrapper-active_effect2").fadeOut(700);
    });
    $(".link").mouseenter(function(){
        $(this).find(".more > img").fadeIn(300);
    }).mouseleave(function(){
        $(this).find(".more > img").fadeOut(300);
    })
  });

  $(document).ready(function(){
    var slideIndex = 0;
    var slides = $('.teenused_slide');
    var dots = $('.teenused_dot');

    var slideInterval = setInterval(nextSlide, 5000);

    function nextSlide(){
      slides.eq(slideIndex).removeClass('active');
      dots.eq(slideIndex).removeClass('active');
      slideIndex = (slideIndex + 1) % slides.length;
      slides.eq(slideIndex).addClass('active');
      dots.eq(slideIndex).addClass('active');
    }




    dots.on('click', function() {
      slides.eq(slideIndex).removeClass('active');
      dots.eq(slideIndex).removeClass('active');
      slideIndex = $(this).index();
      slides.eq(slideIndex).addClass('active');
      dots.eq(slideIndex).addClass('active');
      clearInterval(slideInterval);
    });
  })

  $('.news_block').click(function(){
    $('body').css('overflow', 'hidden');
    var title = $(this).children('.news_block_title').clone();
    var main = $(this).children('.news_block_main').clone();
    main.css({
      "height": "100%",
      "overflow": "visible"
    })
   
    var img = $(this).children('.news_block_img').css('background-image');
    var imagePath = img.replace('url(', '').replace(')', '').replace(/\"/gi, '');
    title.appendTo('.news_modal_content');
    $('<img>').attr('src', imagePath).appendTo('.news_modal_content');
    main.appendTo('.news_modal_content');
    $('body .news_modal').show(300);
    
  })
  $('.news_modal .close-btn').click(function(){
    $('.news_modal').hide(300);
    $('body').css('overflow', 'auto');
    $('.news_modal_content').empty();
  })

  $(document).click(function(event) {
    if (!$(event.target).closest('.news_modal_content, .news_block').length) {
      $('.news_modal').hide(300);
      $('body').css('overflow', 'auto');
      $('.news_modal_content').empty();
    }
  });


  $(".first_element").css({
    "background-color": "#A92B26",
    "color":  "white",
    "border-radius": "15px 0 0 15px"
  })

  $(".services_side_menu li").click(function() {
    openService($(this));
  });

  $(".prices li").click(function(){
    window.location.href = "services.html?id=" + $(this).attr("data-target");
  })
 
  $(".teenused_more").click(function(){
    window.location.href = "pages/services.html?id=" + $(".teenused_slide.active").attr("data-target");
  })
const urlParams = new URLSearchParams(window.location.search);

const id = urlParams.get('id');
console.log(id);

if (id){
  openServiceGet(id);
}




});

