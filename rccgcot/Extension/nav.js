// DECLARARTION
const navMenu = document.querySelector(".navmenu");
const mobileNav = document.querySelector(".mobile-nav");
const hr = document.querySelector("header hr");
const navLinks = document.querySelector(".nav-links-mobile");
const accountBtn = document.querySelector(".account-btn");
const loginForm = document.querySelector(".login");
const signUpForm = document.querySelector(".signup");
const forms = document.querySelector(".forms");
const accountOption = document.querySelector(".account-option");
const header = document.querySelector("header");
const nav = document.querySelector("nav");
const accountSignUp = document.querySelector(".accountSignUp");
const accountLogIn = document.querySelector(".accountLogIn");
const hrefSignUp = document.querySelector(".hrefSignUp");
const hrefLogin = document.querySelector(".hrefLogin");


// Function to toggle the navigation menu and filter sections
function closeMobileNavigation() {
  navMenu.classList.remove("nav-is-active");
  mobileNav.classList.remove("mobile-nav-open");
  mobileNav.classList.remove("header-active");
  hr.classList.add("hr-hidden");
  headerBehaviour();
}

function headerBehaviour() {
  if (header.classList.contains("header-active-static")) {
    header.classList.remove("header-active-static");
  }
  const LinkDropdown = document.querySelectorAll(".link-dropdown");
  LinkDropdown.forEach((otherlink) => {
    const otherDropdown = otherlink.querySelector(".dropdown");
    if (otherDropdown.classList.contains("nav-open")) {
      otherDropdown.classList.remove("nav-open");
    }
  });
}

function toggleNavigation() {
  navMenu.addEventListener("click", () => {
    navMenu.classList.toggle("nav-is-active");
    mobileNav.classList.toggle("header-active");
    hr.classList.toggle("hr-hidden");
    headerBehaviour();
  });

  // Account toggle

function accountToggleSignUp() {
  forms.classList.toggle("form-inactive")
  if (signUpForm.classList.contains("showform")) {
    signUpForm.classList.replace("showform", "hideform");
  } else {
    signUpForm.classList.replace("hideform", "showform");
    accountOption.classList.remove("account-option-show")
  }
}

function accountToggleLogIn() {
  forms.classList.remove("form-inactive")
  if (loginForm.classList.contains("showform")) {
    loginForm.classList.replace("showform", "hideform");
  } 

  else {
    loginForm.classList.replace("hideform", "showform");
    accountOption.classList.remove("account-option-show")
  }
}


accountBtn.addEventListener("click", () => {
    
    if (signUpForm.classList.contains("showform") || loginForm.classList.contains("showform") && !forms.classList.contains("form-inactive")) {
      signUpForm.classList.replace("showform", "hideform");
      loginForm.classList.replace("showform", "hideform");
      forms.classList.add("form-inactive")
      console.log("omo e no easy")
    }       
    else if(signUpForm.classList.contains("hideform") || loginForm.classList.contains("hideform") && forms.classList.contains("form-inactive")) {
      accountOption.classList.toggle("account-option-show")
    }
    else{
      const LinkDropdown = document.querySelectorAll(".link-dropdown");
      LinkDropdown.forEach((otherlink) => {
        const otherDropdown = otherlink.querySelector(".dropdown");
        if (otherDropdown.classList.contains("nav-open")) {
          otherDropdown.classList.remove("nav-open");
        }
      });
    }
    })

  

      accountSignUp.addEventListener("click", ()=> {
        accountToggleSignUp()
      })

      accountLogIn.addEventListener("click", ()=> {
        accountToggleLogIn()
      })

  // Close navLinks when clicking outside the navigation area
  document.addEventListener("click", (event) => {
    const target = event.target;

    if (
      window.innerWidth <= 768 &&
      !navMenu.contains(target) &&
      !navLinks.contains(target) &&
      !mobileNav.contains(target)
    ) {
      closeMobileNavigation();
    }

    else if(accountOption.classList.contains("account-option-show")&&
    !accountBtn.contains(target)
    ){
      accountOption.classList.remove("account-option-show")
    }

    else if(!forms.classList.contains("form-inactive") &&
    
    !forms.contains(target) &&    
    !accountBtn.contains(target)&&
    !accountOption.contains(target))  {
      forms.classList.add("form-inactive")
      if (signUpForm.classList.contains("showform") || loginForm.classList.contains("showform")) {
        signUpForm.classList.replace("showform", "hideform");
        loginForm.classList.replace("showform", "hideform");
      }       
      else {
        signUpForm.classList.replace("hideform", "showform");
        loginForm.classList.replace("hideform", "showform");
      }
    }



    
  });

  hrefLogin.addEventListener("click", ()=> {
    signUpForm.classList.replace("showform", "hideform");
    loginForm.classList.replace("hideform", "showform");
  })

  hrefSignUp.addEventListener("click", ()=> {
    signUpForm.classList.replace("hideform", "showform");
      loginForm.classList.replace("showform", "hideform");
  })

  // let prevScrollPos = window.scrollY;
  let isScrolling = false;
  // console.log(prevScrollPos, "PrevScroll")
  function scrollNav() {
    const currentScroll = mobileNav.scrollY;
    console.log(currentScroll, "current scroll");
    if (!isScrolling) {
      isScrolling = true;
      header.classList.add("header-active-static");
    } else {
      isScrolling = false;
      console.log("not scrollling");
    }
    // prevScrollPos = currentScroll;
    console.log("scrolling");
    // if (isScrollingUp && currentScroll > 0) {
    //   header.classList.add('header-active-static');
    // } else {
    //   header.classList.remove('header-active-static');
    // }
  }
  mobileNav.addEventListener("scroll", scrollNav);
}

// Function to handle the top navigator's visibility and scrolling to top

// Function to handle scrolling behavior and dropdowns in navigation
function setupNavigation() {
  const LinkDropdown = document.querySelectorAll(".link-dropdown");
  let prevScrollPos = window.scrollY;
  let isScrollingUp = false;

  function handleScroll() {
    const currentScroll = window.scrollY;
    if (prevScrollPos < currentScroll) {
      isScrollingUp = true;
    } else {
      isScrollingUp = false;
    }
    prevScrollPos = currentScroll;

    if (isScrollingUp && currentScroll > header.clientHeight) {
      header.classList.add("nav-hidden");
    } else {
      header.classList.remove("nav-hidden");
    }
  }

  window.addEventListener("scroll", handleScroll);

  document.addEventListener("click", (event) => {
    const target = event.target;

    if (!header.contains(target)) {
      LinkDropdown.forEach((link) => {
        const dropdown = link.querySelector(".dropdown");
        if (dropdown.classList.contains("nav-open")) {
          dropdown.classList.remove("nav-open");
        }
      });
    }
  });

  LinkDropdown.forEach((link) => {
    link.addEventListener("click", () => {
      const dropdown = link.querySelector(".dropdown");
      LinkDropdown.forEach((otherlink) => {
        const otherDropdown = otherlink.querySelector(".dropdown");
        if (
          otherDropdown !== dropdown &&
          otherDropdown.classList.contains("nav-open")
        ) {
          otherDropdown.classList.remove("nav-open");
          header.classList.toggle("header-active-static");
        }
      });

      dropdown.classList.toggle("nav-open");
      header.classList.toggle("header-active-static");
    });
  });
}

// Function to handle checkResize
function checkResize() {
  if (window.innerWidth >= 768) {
    closeMobileNavigation();
  }
}

// Function to handle dark mode
// function setupDarkMode() {
//   const dark = document.querySelector(".dark");

//   window.addEventListener("load", () => {
//     if (document.body.classList.contains("dark")) {
//       dark.querySelector("i").classList.add("fa-sun");
//     } else {
//       dark.querySelector("i").classList.add("fa-moon");
//     }
//   });

//   dark.addEventListener("click", () => {
//     document.body.classList.toggle("darkmode");
//     dark.querySelector("i").classList.toggle("fa-sun");
//     dark.querySelector("i").classList.toggle("fa-moon");
//   });

//   window.addEventListener('resize', checkResize);
// }

//   // Function to handle the top navigator's visibility and scrolling to top
//   function setupTopNavigator() {
//     const navigatorTop = document.querySelector(".topnavigator");

//     window.addEventListener("scroll", function() {
//       if (window.scrollY > 900) {
//         navigatorTop.classList.add("topnavigator-visible");
//       } else {
//         navigatorTop.classList.remove("topnavigator-visible");
//       }
//     });

//     navigatorTop.addEventListener("click", function() {
//       window.scrollTo({
//         top: 0,
//         behavior: "smooth"
//       });
//     });
//   }

window.addEventListener("resize", checkResize);

// Call the functions to set up the navigation
toggleNavigation();
// setupTopNavigator();
setupNavigation();
// setupDarkMode();
