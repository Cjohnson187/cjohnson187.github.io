/* Method to rotate background images. */
var index = 0;

var strings = ["url('../cjohnson187.github.io/images/owen-lystrup-chaqHXlOzYs-unsplash.jpg')"]
strings.push( "url('../cjohnson187.github.io/images/cassie-gallegos-tjoxkIODoCE-unsplash.jpg')")
strings.push( "url('../cjohnson187.github.io/images/andrew-coop-r82eni3j0bI-unsplash.jpg')")


function change() {
    console.log("before if") /**************** for testing ****************/
    if (index === strings.length) {
        index = 0
    }
    document.getElementById("intro").style.backgroundImage = strings[index];
    index++;
    setTimeout(change, 20000 )
}
/* probably dont need the above method */



function load() {
    setTimeout(function() {
        change();  
    }, 20000);
}

function menuButton(x){
    x.classList.toggle("change");
}

function expand(y) {
    y.classList.toggle("expanded");
    var inner = y.querySelector("div");
    if (inner.style.display === "block") {
        inner.style.display = "none";
    }
    else {
        inner.style.display = "block";

    }    
}

window.onscroll = function() {progress()};

function progress () {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    console.log(height);
    var scrolled = (winScroll / height) * 100;
    document.getElementById("bar").style.height = scrolled +"%";
}