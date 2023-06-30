const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            entry.target.classList.add('slideup');                        
        }
        else{
            entry.target.classList.remove('show');            
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el))

const hiddenElement = document.querySelectorAll('.sliding')
hiddenElement.forEach((el) => observer.observe(el))
