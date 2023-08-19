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

let getname = document.querySelector("#getname")

let submit = document.querySelector("#submit")
let link = document.querySelector("#link")
let check = document.querySelector(".check")
submit.addEventListener("click", handleButtonClicked);
function handleButtonClicked(event) {
    event.preventDefault()
    
    if(getname.checkValidity()===true){
                 console.log("hey")
                check.style.color="green"

                let inputValue = getname.value
                localStorage.setItem("inputValue", inputValue)
                window.location.href = "hom.html"
                
                console.log(inputValue)                
                console.log("VALID LINK!!")
                
            }     
            else {
                alert("Sorry please provide a NAME!")
                check.style.color="red"
                console.log("INVALID LINK!!")
            }

}