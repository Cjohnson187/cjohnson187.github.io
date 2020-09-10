function aboutMeFunction() {
    var about = document.getElementById("about-me-field");

    if (window.getComputedStyle(about).display === "none") {
        about.style.display = "flex";
    }
    else {
        about.style.display = "none";

    }
}


function skillsFunction() {
    var skills = document.getElementById("skills-field");

    console.log(skills.innerHTML)
    if (window.getComputedStyle(skills).display === "none") {
        skills.style.display = "flex";
    }
    else {
        skills.style.display = "none";

    }
}

function toolsFunction() {
    var tools = document.getElementById("tools-field");
    if (window.getComputedStyle(tools).display === "none") {
        tools.style.display = "flex";
    }
    else {
        tools.style.display = "none";
    }
}