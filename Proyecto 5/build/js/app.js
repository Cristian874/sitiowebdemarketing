var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
/* menu reposive */
$(document).ready(function(){
  $(".header__menu").on("click",function(){




      $("nav").slideToggle();
      })





})

/* barra fija */

//barra fija

function navegacionFija(){

  window.addEventListener("scroll", function(){
    //leemos el scroll y agregamos las clases a los elementos 
    header = document.querySelector(".header__contenido");
     header.classList.toggle("abajo",window.scrollY > 0);


      

}); 

}

navegacionFija();
