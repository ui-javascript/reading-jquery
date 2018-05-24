/**
 * 使用Web Storage API来保存数据，即使在浏览器关闭后依然有效
 */
/*
// Check to see if we have stored a value for the "favoriteBrowser" key before
var favoriteBrowser = window.localStorage.getItem("favoriteBrowser");

// If not, prompt the user to tell us their favorite web browser
if (!favoriteBrowser || favoriteBrowser === "") {
    favoriteBrowser = prompt("Which is your favorite web browser?", "Google Chrome");

    // Store their favorite browser in localStorage for next time they visit
    window.localStorage.setItem("favoriteBrowser", favoriteBrowser);
}

// Show the user that we know what their favorite browser is, even if they told us some time ago
alert("Your favorite browser is " + favoriteBrowser);

// Ask if the user would like us to remove their favorite browser value from persistent storage
if (confirm("Would you like us to forget your favorite browser?")) {

    // Remove the value from localStorage
    window.localStorage.removeItem("favoriteBrowser");
}
*/

/**
 * 访问Web Storage API的一个替代方法
 * 但这个方法貌似在第一遍的时候会显示undefined
 */
// Data within localStorage can be accessed as if they were properties on a standard object
var favoriteBrowser = localStorage["favoriteBrowser"];

if (!favoriteBrowser || favoriteBrowser === "") {
  localStorage["favoriteBrowser"] = prompt("Which is your favorite web browser?", "Google Chrome");
}

alert("Your favorite browser is " + favoriteBrowser);

if (confirm("Would you like us to forget your favorite browser?")) {

  // The delete keyword allows the removal of a property from localStorage
  delete localStorage["favoriteBrowser"];
}
