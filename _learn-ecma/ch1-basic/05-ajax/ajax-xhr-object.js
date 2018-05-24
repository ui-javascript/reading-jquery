// Define a method to load a string of HTML from a specific URL and place this within a given
// element on the current page
function loadHTMLAndReplace(url, element) {
    var xhr = new XMLHttpRequest(),
        LOADED_STATE = 4,
        OK_STATUS = 200;

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== LOADED_STATE) { return;}
        if (xhr.status === OK_STATUS) {
            element.innerHTML = xhr.responseText;
        }
    };

    xhr.open("GET", url);
    xhr.send();
}

loadHTMLAndReplace("test-note.xml", document.getElementById("A3"));
loadHTMLAndReplace("test-note.html", document.getElementById("A4"));