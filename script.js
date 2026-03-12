let slides = document.querySelectorAll(".slide");
let index = 0;

function cambiarSlide(){

slides[index].classList.remove("active");

index++;

if(index >= slides.length){
index = 0;
}

slides[index].classList.add("active");

}

setInterval(cambiarSlide,3000);