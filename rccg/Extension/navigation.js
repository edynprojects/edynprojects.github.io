// Function to toggle the navigation menu and filter sections
function toggleNavigation() {
    const navMenu = document.querySelector(".navmenu");
    const navLinks = document.querySelector(".nav-links");
    const sections = document.getElementsByTagName('section');
  
    navMenu.addEventListener("click", () => {
      navMenu.classList.toggle("nav-is-active");
  
      for (let i = 0; i < sections.length; i++) {
        sections[i].classList.add("filter");
      }
  
      navLinks.classList.toggle("navigation-open");
    });
  
    // Close navLinks when clicking outside the navigation area
    document.addEventListener("click", (event) => {
      const target = event.target;
      
      if (window.innerWidth <= 768 && !navMenu.contains(target) && !navLinks.contains(target)) {
        navMenu.classList.remove("nav-is-active");
        console.log("is it  working?")
        for (let i = 0; i < sections.length; i++) {
          sections[i].classList.remove("filter");
        }
        navLinks.classList.remove("navigation-open");
      }
    });
  }    
  // Function to handle the top navigator's visibility and scrolling to top
  function setupTopNavigator() {
    const navigatorTop = document.querySelector(".topnavigator");
  
    window.addEventListener("scroll", function() {
      if (window.scrollY > 900) {
        navigatorTop.classList.add("topnavigator-visible");
      } else {
        navigatorTop.classList.remove("topnavigator-visible");
      }
    });
  
    navigatorTop.addEventListener("click", function() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
  
  // Function to handle scrolling behavior and dropdowns in navigation
  function setupNavigation() {
    const LinkDropdown = document.querySelectorAll(".link-dropdown");
    const navigation = document.querySelector(".navigation");
  
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
  
      if (isScrollingUp && currentScroll > navigation.clientHeight) {
        navigation.classList.add('nav-hidden');
      } else {
        navigation.classList.remove('nav-hidden');
      }
    }
  
    window.addEventListener("scroll", handleScroll);
  
    document.addEventListener("click", (event) => {
      const target = event.target;
  
      if (!navigation.contains(target)) {
        LinkDropdown.forEach(link => {
          const dropdown = link.querySelector(".dropdown");
          if (dropdown.classList.contains("nav-open")) {
            dropdown.classList.remove("nav-open");
          }
        });
      } else {
        navigation.classList.remove('nav-hidden');
      }
    });
  
    LinkDropdown.forEach(link => {
      link.addEventListener("click", () => {
        const dropdown = link.querySelector(".dropdown");
        LinkDropdown.forEach(otherlink => {
          const otherDropdown = otherlink.querySelector(".dropdown");
          if (otherDropdown !== dropdown && otherDropdown.classList.contains("nav-open")) {
            otherDropdown.classList.remove("nav-open");
          }
        });
  
        dropdown.classList.toggle("nav-open");
      });
    });
  }
  
  // Function to handle dark mode
  function setupDarkMode() {
    const dark = document.querySelector(".dark");
  
    window.addEventListener("load", () => {
      if (document.body.classList.contains("dark")) {
        dark.querySelector("i").classList.add("fa-sun");
      } else {
        dark.querySelector("i").classList.add("fa-moon");
      }
    });
  
    dark.addEventListener("click", () => {
      document.body.classList.toggle("darkmode");
      dark.querySelector("i").classList.toggle("fa-sun");
      dark.querySelector("i").classList.toggle("fa-moon");
    });
  
    function checkResize() {
      if (window.innerWidth >= 768) {
        location.reload();
      }
    }
  
    window.addEventListener('resize', checkResize);
  }
  
  // Call the functions to set up the navigation
  toggleNavigation();
  setupTopNavigator();
  setupNavigation();
  setupDarkMode();
  