function mousein(){
    document.getElementById("text").innerHTML = "you are in the circle";
}

function mouseout(){
    document.getElementById("text").innerHTML = "you are outside of the circle";
}

function mousclick(){
    document.getElementById("wrapper").style.background = "grey";
}

function mousedclick(){
    document.getElementById("wrapper").style.background = "rgb(26, 173, 173)";
}




document.getElementById("circle").addEventListener("mouseover", mousein);
document.getElementById("circle").addEventListener("mouseleave", mouseout);
document.getElementById("circle").addEventListener("click", mousclick);
document.getElementById("circle").addEventListener("dblclick", mousedclick);


