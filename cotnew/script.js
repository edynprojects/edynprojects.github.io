
// GETNAME VARIABLE FROM LOCALSTORAGE.
const GottenName = document.getElementsByClassName("GottenName")
nameDisplay.innerHTML =  `<span class="wa" >God Bless You  ${localStorage.getItem('inputValue')}!</span>`
//DARKMODE JAVASCRIPT 
const dark = document.querySelector(".dark")
dark.addEventListener("click", ()=> {
    document.body.classList.toggle("darkmode")
    var currentPage = 1
    function toogleButton() {
        let 
    }
})
//NAVIGATION JAVACRIPT CODES.
let navMenu = document.querySelector(".navmenu")
let navLinks = document.querySelector(".nav-links")
let nav = document.querySelector(".nav")


navMenu.addEventListener("click", ()=> {
    if(nav.style.bottom == "100%"){
        nav.style.top = "0%"        
        console.log("closed")
    }
    else {
        nav.style.bottom = "100%"
        console.log("opened")
    }

})

// GREETING JAVASCIPT CODES.
const greeting = document.getElementById("greeting");
const time =new Date().getHours();
if(time>18) {
    greeting.innerHTML =` <span class="wa"> Hey! Good Evening!</span> `;
}
else if(time<12) {
    greeting.innerHTML =` <span class="wa">Hey! Good Morning!</span> `
}
else{
    greeting.innerHTML = ` <span class="wa">Hey! Good Day!</span> `
}
