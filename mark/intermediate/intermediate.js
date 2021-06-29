
function clickme(){
    document.body.style.backgroundColor = `rgb( ${getRndInteger(0, 255)}, ${getRndInteger(0, 255)}, ${getRndInteger(0, 255)})`;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

document.getElementById("btn").addEventListener("click",clickme);

 
