// DECLARATIONS
const userFirstName = document.querySelector(".user-first-name")
const userLastName = document.querySelector(".user-last-name")
const button = document.querySelector(".submit-button")
const validity = document.querySelector(".checkValidity")
const link = document.querySelector(".link")

//  FUNCTIONS
function clearInputs() {
    userFirstName.value = ""
    userLastName.value = ""
}
function handleButtonClicked(e) {
    e.preventDefault()
    if(userFirstName.checkValidity()||userLastName.checkValidity()) {
        console.log("valid")
        // clearInputs()
        validity.style.color = "green"
        localStorage.setItem("FirstName", userFirstName.value)
        localStorage.setItem("LastName", userLastName.value)
        window.open("../Home Section/hom.html", "_blank");
        
    }
    else {
        console.log("invalid")
        validity.style.color = "red"
    }
}
button.addEventListener("click", handleButtonClicked)