/* Method to rotate background images. */

var index = 0;

var strings = ["url('../cjohnson187.github.io/images/owen-lystrup-chaqHXlOzYs-unsplash.jpg')"]
strings.push( "url('../cjohnson187.github.io/images/cassie-gallegos-tjoxkIODoCE-unsplash.jpg')")
strings.push( "url('../cjohnson187.github.io/images/andrew-coop-r82eni3j0bI-unsplash.jpg')")



function change() {
    console.log("before if")
    if (index === strings.length) {
        index = 0
    }
    document.getElementById("intro").style.backgroundImage = strings[index];
    index++;
    setTimeout(change, 10000 )
}
