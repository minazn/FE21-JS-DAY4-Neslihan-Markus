
function insideCircle() {
    var inCircle = document.getElementsByTagName("p")[0];
    inCircle.innerHTML = `You are in the Circle!`;
}

function outsideCircle() {
    var inCircle = document.getElementsByTagName("p")[0];
    inCircle.innerHTML = `You are outside the Circle!`;
}

function changeBackroundCircle() {
    var bg_circle = document.getElementsByClassName("dot")[0];
    if (bg_circle.style.backgroundColor == "yellow") {
        bg_circle.style.backgroundColor = "grey";
    } else {
        bg_circle.style.backgroundColor = "yellow";
    }
}

function changeBGCirclebyDblClick(){
    var bg_circle = document.getElementsByClassName("dot")[0];
        bg_circle.style.backgroundColor = "blue";
    
}


document.getElementsByTagName("p")[0].addEventListener("mouseover", insideCircle);

document.getElementsByTagName("p")[0].addEventListener("mouseout", outsideCircle);

document.getElementsByClassName("dot")[0].addEventListener("click", changeBackroundCircle);

document.getElementsByClassName("dot")[0].addEventListener("dblclick", changeBGCirclebyDblClick);

