//NAVIGATION JAVACRIPT CODES.
const navMenu = document.querySelector(".navmenu");
const navLinks = document.querySelector(".nav-links");
const navLink = document.querySelector(".nav-link");
let totalHeight = 0
navMenu.addEventListener("click", ()=> {
    const linkContainer = navLinks.getBoundingClientRect().height
    const navLinkHeight = navLink.getBoundingClientRect().height
    // console.log(linkContainer, navLinkHeight)
    if(linkContainer === 0) {
        navLinks.style.height = "200vh"
    }
    
    else {
        navLinks.style.height="0px";
        
    }
    
})



// NAVIGATION                            
const LinkDropdown = document.querySelectorAll(".link-dropdown");
const navigation = document.querySelector(".navigation"); 
// HIDDEN | SHOW SCROLL NAVIGATION
// DEFAULT

let prevScrollPos = window.scrollY
let isScrollingUp = false
function handleScroll() {
    const currentScroll = window.scrollY
    if(prevScrollPos > currentScroll) {
        isScrollingUp = true
    }
    else {
        isScrollingUp  = false
    }
    prevScrollPos  = currentScroll
    if(isScrollingUp && currentScroll > navigation.clientHeight) {
        navigation.classList.add('hidden')
    }
        else {
            navigation.classList.remove('hidden')
        }
    
}
window.addEventListener("scroll", handleScroll)
document.addEventListener("click", (event) => {
    const target = event.target;

    // Close all open dropdowns if the click is outside the navigation area or dropdowns
    if (!navigation.contains(target)) {
        LinkDropdown.forEach(link => {
            const dropdown = link.querySelector(".dropdown");
            if (dropdown.classList.contains("nav-open")) {
                dropdown.classList.remove("nav-open");
            }
            else {
                navLinks.style.height="0px";
            }
        });
    }
});

LinkDropdown.forEach(link => {    
    link.addEventListener("click", () => {    
        const dropdown = link.querySelector(".dropdown");               
        LinkDropdown.forEach(otherlink => {    
            const otherDropdown =  otherlink.querySelector(".dropdown")
            if(otherDropdown !== dropdown && otherDropdown.classList.contains("nav-open")) {
                otherDropdown.classList.remove("nav-open")
            }
        })
        
        // Toggle the clicked dropdown
        dropdown.classList.toggle("nav-open");
        
    });
});
