var GottenName = document.getElementsByClassName("GottenName")
nameDisplay.innerHTML =  `<span class="wa" >Hello ${localStorage.getItem('inputValue')}! How you doing?</span>`
var greeting = document.getElementById("greeting");
var time =new Date().getHours();
if(time>18) {
    greeting.innerHTML =` <span class="wa"> Hey! Good Evening!</span> `;
}
else if(time<12) {
    greeting.innerHTML =` <span class="wa">Hey! Good Morning!</span> `
}
else{
    greeting.innerHTML = ` <span class="wa">Hey! Good Day!</span> `
}



