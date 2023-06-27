
const dropdowns = document.querySelectorAll(".dropdown")


dropdowns.forEach(dropdown=>{
    console.log("hhhry")
    
    const menu = dropdown.querySelector(".menu")
    const dropdowncon = dropdown.querySelector(".dropdowncon")
    const caret = dropdown.querySelector(".caret")
    dropdowncon.addEventListener("click", ()=> {
        console.log("hry")
        menu.classList.toggle('none')
       caret.classList.toggle('caret-rotate')
       
       
    })
})