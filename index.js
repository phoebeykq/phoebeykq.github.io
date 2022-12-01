const navMenu = document.getElementById("navMenu"); 
const mainContent = document.getElementById("mainContent"); 

function openNav() {
    navMenu.classList.remove("navMenuClosed"); 
    navMenu.classList.add("navMenuOpened"); 
    mainContent.classList.remove("mainContentClosed"); 
    mainContent.classList.add("mainContentOpened"); 
}

function closeNav() {
    navMenu.classList.remove("navMenuOpened"); 
    navMenu.classList.add("navMenuClosed"); 
    mainContent.classList.remove("mainContentOpened"); 
    mainContent.classList.add("mainContentClosed"); 
}

const body = document.body; 
const toggle = document.getElementById("toggle"); 
const shadow = document.getElementById("shadow"); 

toggle.addEventListener("input", (e) => {
    const isChecked = e.target.checked; 
    if(isChecked) {
        body.classList.add("darkMode"); 
        navMenu.classList.add("sideBarDark"); 
        shadow.classList.add("shadowDark"); 
        shadow.classList.remove("shadowLight"); 
    } else {
        body.classList.remove("darkMode"); 
        navMenu.classList.remove("sideBarDark"); 
        shadow.classList.remove("shadowDark"); 
        shadow.classList.add("shadowLight"); 
    }
}); 