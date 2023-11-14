const preloader= document.querySelector(".preloader")
document.body.classList.add("disable-scrolling")
window.addEventListener("load", function() {
    preloader.classList.add("on-load-none")
    document.body.classList.remove("disable-scrolling")
})