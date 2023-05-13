const navlink = document.querySelectorAll(".nav_link");
 
navlink.forEach(navlink => {
    navlink.addEventListener("click",() => {
        document.querySelector(".active").classList.remove("active");
        navlink.classList.add("active");
    });
});

// right-menu

const bar = document.getElementById("bar");
const btn_Close = document.getElementById("btn-Close");
const right_menu = document.querySelector(".right-menu");
var x = 0;
bar.onclick = function(){

    if( x == 0){
        right_menu.style.top = "60";
        bar.classList.remove("fa-bars-staggered");
        bar.classList.add("fa-xmark");
        x= 1;
    }else if( x == 1){
        right_menu.style.top = "-510";
        bar.classList.remove("fa-xmark");
        bar.classList.add("fa-bars-staggered");
        x= 0;
    }
    
}

// slider

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slide-container");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

//popup

var place_con = document.querySelectorAll('.place-con');
var place_box = document.querySelector(".place-box");
var container_preview = document.querySelector(".container-preview");
var preview = document.querySelectorAll('.preview');


document.querySelectorAll('.place-con .place-box').forEach(product =>{
    product.onclick = () =>{
        container_preview.style.display= 'block';
        let name = product.getAttribute('data-name');
        preview.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if(name == target){
                preview.classList.add('active');
            }
        });
    };
});
var btnClose = document.querySelector(".c1");

preview.forEach(close =>{
    close.querySelector('.c1').onclick = () =>{
        close.classList.remove('active');
        container_preview.style.display= 'none';
    };
});

