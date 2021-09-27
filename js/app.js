/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const sections = document.querySelectorAll("section");
const navList = document.getElementById("navbar__list");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/


// create dynamic navigation list ........................................
function createItems (){
    sections.forEach(element => {
        item = `<li> <a href="#${element.id}" class="menu__link">${element.dataset.nav}</a></li>`;
        navList.insertAdjacentHTML("beforeend", item);
    });

}
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport
function activation (){
    sections.forEach(element =>{
        let top = element.getBoundingClientRect().top;
        if (top <180 && top > -360){
            element.classList.add("your-active-class");
        }
        else
            element.classList.remove("your-active-class");
    });

}


/**
 * End Main Functions
 * Begin Events
 * 
*/
// made scroll ro top button 
const button = document.querySelector("#toNav");
const topPage = document.querySelector(".main__hero")
button.addEventListener("click", () => {
    topPage.scrollIntoView(true);
    
});

// Build menu 
createItems();
// Scroll to section on link click (made with css)


// Set sections as active
window.onscroll = activation;

