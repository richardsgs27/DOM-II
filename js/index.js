// Your code goes here
const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("mouseover", function(event){
    funBus.style.color = "Chartreuse";
    funBus.style.fontSize = "5rem";
})
funBus.addEventListener("mouseout", function(event){
    funBus.style.color = "DarkOrange";
    funBus.style.fontSize = "4rem";
})

const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(function(item){
    item.addEventListener("click", function(event) {
        event.preventDefault();
        item.style.color = "OrangeRed";
    })
})
navLinks.forEach(function(item){
    item.addEventListener("mouseout", function(event){
        item.style.color = "Lime";
})
})

const body = document.querySelector("body");
window.addEventListener("scroll", function (event) {
    body.style.fontStyle = "bolder";
    body.style.color = "MidnightBlue";
})
window.addEventListener("wheel", function (event) {
    body.style.fontStyle = "italic";
    body.style.color = "SeaGreen";
})
window.addEventListener("load", function(event) {
    console.log("EVERYTHING FREE");
    alert("Hurry, everything FREE just for today!!");
})

window.addEventListener("resize", function(event) {
    alert("What is going on?!");
})

const image = document.querySelectorAll(".img-content");
image.forEach(function(item){
    item.addEventListener("mouseover", function(event){
        item.style.border = "thick dotted purple";
    })
    item.addEventListener("mouseout", function(event) {
        item.style.border = "1px solid orange";
})
})

const button = document.querySelectorAll(".btn");
button.forEach(function(item){
item.addEventListener("dblclick", function(event){
    event.stopPropagation();
    item.style.color = "Red";
    item.textContent = "OUT OF ORDER!";
    alert("WARNING, OUT OF ORDER!");  
})
})

const destination = document.querySelector(".content-destination");
window.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        destination.style.color = "purple";
    }
}) 

destination.addEventListener("focus", function(event) {
    destination.style.color = "red";
    alert("COOL!!");
    
})
