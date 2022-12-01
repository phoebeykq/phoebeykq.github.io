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

function getTheme() {
    if (localStorage.getItem("userTheme") === "darkTheme") {
        toggle.checked = true; 
        applyDarkTheme(); 
    }
}

getTheme(); 

function checkTheme() {
    if (body.classList.contains("darkMode")) {
    	localStorage.removeItem("userTheme"); 
        localStorage.setItem("userTheme", "darkTheme"); 
        console.log(localStorage.getItem("userTheme")); 
    } else {
    	localStorage.removeItem("userTheme"); 
        localStorage.setItem("userTheme", "lightTheme"); 
        console.log(localStorage.getItem("userTheme")); 
    }
}

checkTheme(); 

function applyDarkTheme() {
    body.classList.add("darkMode"); 
    navMenu.classList.add("navBarDark"); 
}

function applyLightTheme() {
    body.classList.remove("darkMode"); 
    navMenu.classList.remove("navBarDark"); 
}

toggle.addEventListener("input", function(event) {
    const isChecked = event.target.checked; 
    if(isChecked) {
        applyDarkTheme(); 
        checkTheme(); 
    } else {
        applyLightTheme(); 
        checkTheme(); 
    }
}); 