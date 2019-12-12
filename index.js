console.log("Hello");
console.log(window.location);

function clearall() {
    console.log("CLEARALL");
    if (document.getElementById('rvb').getAttribute('class') == "blue" ) {
        console.log("class is blue");
        document.getElementById('rvb').setAttribute("class", "red");
    } else {
        console.log("class is red");
        document.getElementById('rvb').setAttribute("class", "blue");
    }
}
