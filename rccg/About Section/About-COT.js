const dropdownInfo = document.querySelectorAll(".dropdown-info")
// const dropdownTitle = document.querySelectorAll(".dropdown-info-title")
dropdownInfo.forEach(dropdown=> {
    dropdown.addEventListener("click", ()=> {
        // const dropdownTitle = document.querySelector(".dropdown-info-title")
        // let dropdownHeight = dropdownTitle.clientHeight
        // console.log(dropdownHeight)
        // dropdown.style.height = dropdownHeight
        // console.log(dropdown.clientHeight)
        let newHeight
        getDropdownTitleHeight(newHeight)
        console.log(newHeight)
    })
})

function getDropdownTitleHeight(height) {
    const dropdownTitle = document.querySelector(".dropdown-info-title")
    height = dropdownTitle.clientHeight
    const name = new type(arguments);
}