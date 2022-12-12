import "./LightDarkMode.css"; 

function LightDarkMode() {
    return (
        <>
        <span id="light-switch">
            <input id="toggle-switch" type="checkbox" onChange={handleChange}/>
            <label for="toggle-switch"/>
        </span>
        </>
    )
}

function applyDarkTheme() {
    document.body.style.backgroundColor = "black"; 
    document.body.style.color = "white"; 
    document.getElementById("nav-menu").style.backgroundColor = "#333"; 
}

function applyLightTheme() {
    document.body.style.backgroundColor = "white"; 
    document.body.style.color = "black"; 
    document.getElementById("nav-menu").style.backgroundColor = "#ccc"; 
}

function handleChange(event) {
    if (event.target.checked) {
        applyDarkTheme(); 
    } else {
        applyLightTheme(); 
    }
}

export default LightDarkMode; 