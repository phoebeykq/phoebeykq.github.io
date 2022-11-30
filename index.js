function openNav() {
    document.getElementById("navMenu").style.width = "30%"; 
    document.getElementById("mainContent").style.marginLeft = "30%"; 
    document.getElementById("mainContent").style.padding = "15vh 5vw 0vh 5vw"; 
}

function closeNav() {
    document.getElementById("navMenu").style.width = "0"; 
    document.getElementById("mainContent").style.marginLeft = "0"; 
    document.getElementById("mainContent").style.padding = "15vh 20vw 0vh 20vw"; 
}

const toggle = document.getElementById("toggle"); 
const body = document.body; 
const navMenu = document.getElementById("navMenu"); 

toggle.addEventListener("input", (e) => {
    const isChecked = e.target.checked; 
    if(isChecked) {
        body.classList.add("darkMode"); 
        navMenu.classList.add("sideBarDark"); 
    } else {
        body.classList.remove("darkMode"); 
        navMenu.classList.remove("sideBarDark"); 
    }
}); 