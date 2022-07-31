const R = document.getElementById('R-CL');
const G = document.getElementById('G-CL');
const B = document.getElementById('B-CL');
const HEX = document.getElementById('HEX-CL')

const currentColour = document.getElementById('current__Colour');
const currentHEX = document.getElementById('current__HEX');
const body =  document.body;

const RGB = [R, G, B];
var r,g,b;

RGB.forEach(slider =>{
    slider.addEventListener("mousemove", ChangeColour);
    slider.addEventListener("touchmove", ChangeColour);
    slider.addEventListener("change", ChangeColour);
})
function ChangeColour(){
    currentColour.style.background =  `rgb(${R.value},${G.value},${B.value})`;
    currentHEX.innerHTML = currentColour.style.background;
    body.style.background =  `rgb(${R.value},${G.value},${B.value})`;
    ColourisEqual();
}

const randColour = document.getElementById('random__Colour');

randColour.style.background = Random();
console.log("Random colour = " + randColour.style.background);

function Random(){
    r = Math.floor(Math.random()*256);
    g = Math.floor(Math.random()*256);
    b = Math.floor(Math.random()*256);
    return rgb =  `rgb(${r},${g},${b})`;
}

const x = 5;
function ColourisEqual(){
   if((R.value >= r-x && R.value <= r+x) && 
    (G.value >= g-x && G.value <= g+x) &&
    (B.value >= b-x) && (B.value <=b+x)){
    ShowMarks();
    GetHelp();
    console.log("Success");
    console.log("Random colour = " + randColour.style.background);
   }
}

const hint = document.getElementById('hint');
GetHelp();

function GetHelp(){
    setTimeout(() => {
        hint.style.cursor = 'pointer';
        hint.innerHTML = "CLICK to know!";
        hint.addEventListener("click", ShowHint);
    }, 10000);
}

function ShowHint(){
        hint.style.cursor = 'text';
        hint.innerHTML = randColour.style.background;
        hint.removeEventListener("click", ShowHint);
}

const marks = document.getElementsByClassName('marks')
function ShowMarks(){
    let interval  = setInterval(() => {
            let curOp = MarksOpacity();
            marks[0].style.opacity = curOp
            
            marks[1].style.opacity = curOp
    }, 250);
    setTimeout(() => {
        clearInterval(interval);
        randColour.style.background = Random();
        hint.innerHTML = "Try to guess!";
    }, 1500);
}
var op = false;
function MarksOpacity(){
    op = !op;
    if(!op)
        return 0;
    else
        return 1;
}

