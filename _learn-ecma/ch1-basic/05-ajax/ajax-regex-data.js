/**
 * 通过文本替换实现的基础客户端模板
 * 就是框架前身
 */

// using {{ ... }} to denote the data property name
// to be replaced with real data
var template = "<p>Name: <a href=\"mailto:{{email}}\">{{firstName}} {{lastName}}</a><br>";
template += "Company: {{company}}</p>";
template += "<p>City: {{city}}</p>";

// Define two data objects
var me = {
    firstName: "Den",
    lastName: "Odell",
    email: "denodell@me.com",
    company: "AKQA",
    city: "London"
},
bill = {
    firstName: "Bill",
    lastName: "Gates",
    email: "bill@microsoft.com",
    company: "Microsoft",
    city: "Seattle"
};

// apply data from a JavaScript object into a HTML template,
// represented as a string
function applyDataToTemplate(templateString, dataObject) {
    var key,
        value,
        regex;

    // regex遍历循环整个字符串
    for (key in dataObject) {
        regex = new RegExp("{{" + key + "}}", "g");
        value = dataObject[key];
        templateString = templateString.replace(regex, value);
    }
    return templateString;
}

document.getElementById("A3").innerHTML = applyDataToTemplate(template, me);
document.getElementById("A4").innerHTML = applyDataToTemplate(template, bill);
