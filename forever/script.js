var greeting = document.getElementById("greeting");
var time =new Date().getHours();
if(time>18) {
    greeting.innerHTML = " Hey! Good Evening!";
}
else if(time<12) {
    greeting.innerHTML = " Hey! Good Morning!";
}
else{
    greeting.innerHTML = " Hey! Good Day!";
}

var menuBtn = document.getElementById("menuBtn");
var sideNav = document.getElementById("sideNav");
var menu = document.getElementById("menu");
sideNav.style.right="-250px";
// sideNav.style.right="-250px";
// menu.onclick = function() {
//     menu.src= "./img/close.png ";
// }

menuBtn.addEventListener("click", function() {
    if (sideNav.style.right=="-250px"){
        sideNav.style.right= "100px";
        menu.src= "./img/close.png ";
    }
    else {
        sideNav.style.right="-250px";
        menu.src= "./img/icons8-menu-30.png";
    
    }
});
menuBtn.onclick = function() 