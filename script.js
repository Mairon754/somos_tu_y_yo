let slides = document.querySelectorAll(".slide");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let dotsContainer = document.querySelector(".dots");

let index = 0;

/* CREAR INDICADORES */

slides.forEach((_,i)=>{

let dot=document.createElement("span");

dot.classList.add("dot");

if(i===0)dot.classList.add("active");

dot.addEventListener("click",()=>{

showSlide(i);

});

dotsContainer.appendChild(dot);

});

let dots=document.querySelectorAll(".dot");

/* MOSTRAR SLIDE */

function showSlide(i){

slides[index].classList.remove("active");

dots[index].classList.remove("active");

index=i;

slides[index].classList.add("active");

dots[index].classList.add("active");

}

/* BOTON SIGUIENTE */

next.onclick=()=>{

let i=index+1;

if(i>=slides.length)i=0;

showSlide(i);

}

/* BOTON ANTERIOR */

prev.onclick=()=>{

let i=index-1;

if(i<0)i=slides.length-1;

showSlide(i);

}

/* AUTO SLIDE */

setInterval(()=>{

let i=index+1;

if(i>=slides.length)i=0;

showSlide(i);

},4000);


/* CORAZONES FLOTANDO */

function crearCorazon(){

let heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="💜";

heart.style.left=Math.random()*100+"%";

heart.style.fontSize=(20+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*5)+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(crearCorazon,800);