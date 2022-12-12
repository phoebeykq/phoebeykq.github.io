import "./NavMenu.css"; 
import NavMenuLinks from "./NavMenuLinks"; 

function openNav() {
    document.getElementById("nav-menu").style.width = "30%"; 
}

function closeNav() {
    document.getElementById("nav-menu").style.width = "0"; 
}

function NavMenu() {
    return (
        <>
        <span id="open-btn" onClick={openNav}>&#9776;</span>
        <div id="nav-menu">
            <span id="close-btn" onClick={closeNav}>&times;</span>
            <NavMenuLinks/>
        </div>
        </>
    )
}

export default NavMenu; 