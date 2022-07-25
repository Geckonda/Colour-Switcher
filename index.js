const R = document.getElementById('R-CL');
const G = document.getElementById('G-CL');
const B = document.getElementById('B-CL');
const HEX = document.getElementById('HEX-CL')

const currentColour = document.getElementById('current__Colour');
const currentHEX = document.getElementById('current__HEX');
const body =  document.body;

const RGB = [R, G, B];

RGB.forEach(slider =>{
    slider.addEventListener("mousemove", ChangeColour);
    slider.addEventListener("touchmove", ChangeColour);
    slider.addEventListener("change", ChangeColour);
})
function ChangeColour(){
    currentColour.style.background =  `rgb(${R.value},${G.value},${B.value})`;
    currentHEX.innerHTML = currentColour.style.background;
    body.style.background =  `rgb(${R.value},${G.value},${B.value})`;
}