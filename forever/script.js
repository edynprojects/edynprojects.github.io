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