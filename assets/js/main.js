// go topbtn
const goTopBtn =document.getElementById("goTop");
window.addEventListener("scroll", ()=> {
  console.log(window.scrollY);
  if (window.scrollY > 500){
    goTopBtn.style.bottom = "20px";
  }else{
    goTopBtn.style.bottom ="1000px";
  }
});
// handle event bottom to  top button
goTopBtn.addEventListener("click",() => {
  window.scrollTo(0,0);
});

// owl slider
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4, 
  // items change number for slider display on desktop
  
    loop:true,
    margin:10,
    dynamicBullets:true,
    responsiveClass: true,

    responsive: {
      0: {
        items: 1
      },
  
      600: {
        items: 3
      },
  
      1024: {
        items: 4
      },
  
      1366: {
        items: 4
      }
    }
    




});