// let verseContent = document.querySelector(".verseContent")
// var bibletext = "Jesus Christ The Same Yesterday, Today and Forever"
// let index = 0
// const initialDelay = 7000;

// function typeText(){
//     if(index < bibletext.length){
//         verseContent.innerHTML += bibletext.charAt(index)
//         index++
//         setTimeout(typeText, 60)

//     }
// }

// setTimeout(typeText, initialDelay)
const vision = [
    "Jesus",
    "God",
    "Father",
    "Son"
]
vision.forEach(item=>{
    
})
        // Declarations
        const parent = document.querySelector(".typeTest")
        // End Of Declarations
    
    // functions5
    function createList(index) {        
        for( let i =0; i < 5; i++) {
            let list  = document.createElement('li')
            list.classList.add("classList")
            list.innerHTML= vision[index]
        }
        
    }
    // End Of functions
    // parent.appendChild(list)
    console.log(parent)
    createList()
    