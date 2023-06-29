// JAVASCRIPT CODE 

//  HAMBURGER MENU 
let menu = document.querySelector(".menu")
let nav = document.querySelector(".nav")
let navmenu = document.querySelector(".navmenu")

navmenu.addEventListener("click", () => {
    
    if (nav.style.top=="100%"){
        nav.style.top= "0px";                
        menu.src= "./img/close.png ";
    }
    else {
        nav.style.top="100%";
        menu.src= "./img/icons8-menu-30.png";
    
    }
}
)
// GREETNG JAVASCRIPT
var greeting = document.getElementById("greeting");
var time =new Date().getHours();
if(time>18) {
    greeting.innerHTML =` <span class="wa"> " Hey! Good Evening!"</span> `;
}
else if(time<12) {
    greeting.innerHTML =` <span class="wa">Hey! Good Morning!</span> `
}
else{
    greeting.innerHTML = ` <span class="wa">Hey! Good Day!</span> `
}
