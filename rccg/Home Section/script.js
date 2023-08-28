const footerDate = document.querySelector(".footer-date")
footerDate.innerHTML = new Date().getFullYear()
// SERVICE BUTTONS
const service = [
    {
        programme: " Worship Service",
        time: "8:00AM - 11:00PM",
        day: "Sunday"
    },
    {
        programme: "Digging Deep(Bible Study)",
        time: "6:00PM - 7:00PM",
        day: "Tuesday"
    },
    {
        programme: "Faith Clinic(Prayer Meeting)",
        time: "6:00PM - 7:00PM",
        day: "Thursday"
    },
    {
        programme: "Early Morning Praise",
        time: "6:30PM - 7:30PM",
        day: "Every Second Saturday"
    }
]
// DECLEARATIONS
const programme = document.querySelector(".programme")
const day = document.querySelector(".day")
const serviceTime = document.querySelector(".time")

window.addEventListener("DOMContentLoaded", ()=> {
showService(currentService)

})
// SET STARTING ITEM
let currentService = 0
const serviceBtn = document.querySelectorAll(".service-btn")
serviceBtn.forEach(btn=> {
    btn.addEventListener("click", e=> {
        const id = e.currentTarget
        if(id.classList.contains("leftbtn")) {
            currentService--
            if(currentService < 0 ){
                currentService = service.length - 1
            }
            showService()
        }
        else if(id.classList.contains("rightbtn")) {
            currentService++
            if(currentService > service.length - 1) {
                currentService = 0
            }
            showService()
        }
    })
})
function showService() {
    const serviceItem = service[currentService] 
    programme.textContent = serviceItem.programme
    day.textContent = serviceItem.day
    serviceTime.textContent = serviceItem.time
}

// SERVICE ANIMATION
let currentIndex = 0
 function displayServiceDetails() {
    const serviceItem = service[currentIndex] 
    programme.textContent = serviceItem.programme
    day.textContent = serviceItem.day
    serviceTime.textContent = serviceItem.time

const dotContainer = document.querySelector(".dots")
dotContainer.innerHTML = " "
for(let i = 0; i< service.length; i++) {
    const circleDiv = document.createElement("div")
    circleDiv.classList.add("dot")
    if(i === currentIndex) {
        circleDiv.classList.add("dot-active")
    }
    circleDiv.addEventListener("click", ()=> {
        currentIndex = i
        displayServiceDetails()
    })
    dotContainer.appendChild(circleDiv)
}
 }
 displayServiceDetails()
 setInterval(() => {
    currentIndex = (currentIndex +1) % service.length
    displayServiceDetails()
 }, 4000);
const preloader= document.querySelector(".on-load")
window.addEventListener("load", function() {
    preloader.classList.add("on-load-none")
})


// GETNAME VARIABLE FROM LOCALSTORAGE.
const GottenName = document.getElementsByClassName("GottenName")
nameDisplay.innerHTML =  `<span class="wa" >God Bless You  ${localStorage.getItem('inputValue')}!</span>`
//DARKMODE JAVASCRIPT
 


document.addEventListener("DOMContentLoaded", function() {
const dropdownItem = document.querySelector(".dropdown-item")
    const navDropdown = document.querySelector(".dropdown-items")

dropdownItem.addEventListener("click", ()=> {
    navDropdown.classList.toggle("nav-none")
})
        document.addEventListener("click", function (event) {
        if(!navDropdown.contains(event.target) && !dropdownItem.contains(event.target)) {
            navDropdown.classList.add("nav-none")
        }
        })

    
})


//ACTIVE DROPDOWN

let link = document.querySelectorAll(".link") 
link.forEach(navlink => {    
    navlink.addEventListener("click", ()=> {
        const dropdownItem = document.querySelector(".dropdown-item")
        if(!dropdownItem) {
            nav.style.bottom = "100%"
        console.log("nav closed")
        }
    })
    
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

