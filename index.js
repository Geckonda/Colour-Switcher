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
G.addEventListener("mousemove", ()=>{
    ChangeColour();
})
B.addEventListener("mousemove", ()=>{
    ChangeColour();
})
HEX.addEventListener("change", ()=>{
    ChanheWithHEX();
})
function ChangeColour(){
    currentColour.style.background =  `rgb(${R.value},${G.value},${B.value})`;
    currentHEX.innerHTML = currentColour.style.background;
    body.style.background =  `rgb(${R.value},${G.value},${B.value})`;
}
function ChanheWithHEX(){
    console.log(HEX.value);
}