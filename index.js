const R = document.getElementById('R-CL');
const G = document.getElementById('G-CL');
const B = document.getElementById('B-CL');
const HEX = document.getElementById('HEX-CL')

const currentColour = document.getElementById('current__Colour');
const currentHEX = document.getElementById('current__HEX');
const body =  document.body;

console.log(body);

R.addEventListener("mousemove", ()=>{
    ChangeColour();
})
R.addEventListener("touchmove", ()=>{
    ChangeColour();
})
R.addEventListener("change", ()=>{
    ChangeColour();
})

G.addEventListener("mousemove", ()=>{
    ChangeColour();
})
G.addEventListener("touchmove", ()=>{
    ChangeColour();
})
G.addEventListener("change", ()=>{
    ChangeColour();
})
B.addEventListener("mousemove", ()=>{
    ChangeColour();
})
B.addEventListener("touchmove", ()=>{
    ChangeColour();
})
B.addEventListener("change", ()=>{
    ChangeColour();
})
function ChangeColour(){
    currentColour.style.background =  `rgb(${R.value},${G.value},${B.value})`;
    currentHEX.innerHTML = currentColour.style.background;
    body.style.background =  `rgb(${R.value},${G.value},${B.value})`;
}