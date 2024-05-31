const asteroid_2 = document.getElementById("asteroid-2");
const roket = document.getElementById("roket");
const bumi = document.getElementById("bumi");
const asteroid = document.getElementById("asteroid");

window.addEventListener("scroll", function() {
    let scrollY = window.scrollY;

    asteroid_2.style.top = 330 + scrollY * 0.5 / 5 + "px";                
    asteroid_2.style.left = 200 + scrollY * -0.25 / 5 + "px";
    
    roket.style.top = 650 + scrollY * -0.5 / 5 + "px";                
    roket.style.right = 200 + scrollY * 0.25 / 5 + "px";

    bumi.style.top = 1250 + scrollY * -0.5 / 5 + "px";                
    bumi.style.left = 280 + scrollY * -0.25 / 5 + "px";
    
    asteroid.style.top = 1550 + scrollY * 0.5 / 5 + "px";                
    asteroid.style.right = 250 + scrollY * 0.25 / 5 + "px";
});