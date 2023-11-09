const dropdowns = document.querySelectorAll(".dropdown")
dropdowns.forEach(dropdown =>{
    const dropdowncon = dropdown.querySelector(".dropdowncon")
    dropdowncon.addEventListener("click", function(){        
        dropdowns.forEach(function(item){
            if(item !== dropdown) {
                item.classList.remove('show-text')        
            }               
           })
       dropdown.classList.toggle('show-text')
    })
       
})


