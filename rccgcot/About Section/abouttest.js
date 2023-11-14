
const dropdown = document.querySelectorAll(".dropdown")
const information = document.querySelectorAll(".information")
 const informationContainer = document.querySelectorAll(".information-container")
 const icon = document.querySelectorAll(".header i")
dropdown.forEach((item, index) => {
    item.addEventListener("click",() => {
             const  linkContainer = informationContainer[index].getBoundingClientRect().height
    const linksHeight = information[index].getBoundingClientRect().height



    if(linkContainer === 0) {
           informationContainer[index].style.height =`${linksHeight}px`                            
           icon[index].classList.remove("fa-chevron-right")
           icon[index].classList.add("fa-chevron-down")
    }

    else {
            informationContainer[index].style.height = 0;
            icon[index].classList.add("fa-chevron-right")
        icon[index].classList.remove("fa-chevron-down")
    }        
    })
    

})

