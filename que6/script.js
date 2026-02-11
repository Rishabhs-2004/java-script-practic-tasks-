var home = document.querySelector("#home");
var about = document.querySelector("#about");
var contact = document.querySelector("#contact");

var hometext = document.querySelector("#hometext");
var abouttext = document.querySelector("#abouttext");
var contacttext = document.querySelector("#contacttext");

function hideAll() {
    hometext.style.display = "none";
    abouttext.style.display = "none";
    contacttext.style.display = "none";
}

hometext.style.display = "block"; 

home.addEventListener("click", function () {
    hideAll();
    hometext.style.display = "block";
});

about.addEventListener("click", function () {
    hideAll();
    abouttext.style.display = "block";
});

contact.addEventListener("click", function () {
    hideAll();
    contacttext.style.display = "block";
});
