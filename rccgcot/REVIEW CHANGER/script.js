const reviews = [
    {
        id: 1 ,
        name: "susan smith" ,
        job: "web developer" ,
        img: "./img/personface1.jpg" , 
        text: `info: 1 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, deserunt. Repellat corporis eum vitae vero sint tempora nulla asperiores fugiat?` ,         
    },
    {
        id: 2 ,
        name: "wiliams Jessica" ,
        job: "Backend developer" ,
        img: "./img/personface2.jpg" ,  
        text: " info: 2 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, deserunt. Repellat corporis eum vitae vero sint tempora nulla asperiores fugiat?" ,         
    },
    {
        id: 3 ,
        name: "Richard James" ,
        job: "UI/UX Developer" ,
        img: "./img/personface3.jpg" ,  
        text: " info: 3 - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident, deserunt. Repellat corporis eum vitae vero sint tempora nulla asperiores fugiat?" ,         
    }
    

]
const img = document.querySelector(".person-img")
const author = document.querySelector(".author")
const job = document.querySelector(".job")
const info = document.querySelector(".info")

// DECLARATION OF BUTTONS
const prevBtn = document.querySelector(".prev-btn")
const nextBtn = document.querySelector(".next-btn")
const RandomBtn = document.querySelector(".random-btn")

// SET STARTING ITEM
let currentItem = 0

window.addEventListener("DOMContentLoaded", ()=>{
     showperson(currentItem)
})
function showperson()  {
    const item = reviews[currentItem]
      img.src = item.img
       author.textContent = item.name
       job.textContent = item.job
       info.innerHTML = item.text
}
nextBtn.addEventListener("click", ()=> {
    currentItem++
    if( currentItem > reviews.length - 1) {
        currentItem = 0        
    }
    showperson()
})
prevBtn.addEventListener("click", ()=> {
    currentItem--
    if( currentItem < 0 ) {
        currentItem = reviews.length - 1      
    }
    showperson()
})
RandomBtn.addEventListener("click", ()=> {
    currentItem = getRandomNumber()
    console.log(currentItem)
    showperson()
})

function getRandomNumber() {
    return Math.floor(Math.random() * reviews.length)
}