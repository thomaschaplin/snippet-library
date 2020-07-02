const cssselectorToUse = prompt("Enter a CSS selector to match elements", "");
const theCodeToExec = prompt("Enter JavaScript Code to use element", "element.style='border:10px dashed red'");
document.querySelectorAll(cssselectorToUse).forEach(function () { eval(theCodeToExec) });
