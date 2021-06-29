//-----------------------------------------BASIC 1 ----------------------------------------------


function writeToDiv() {

    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var age = document.getElementById("age").value;
    document.getElementById("extract_fname").innerHTML = fname;
    if (fname.length > 5) {
        document.getElementById("extract_fname").style.color = "green";
    } else {
        document.getElementById("extract_fname").style.color = "red";
    }
    if (lname.length > 5) {
        document.getElementById("extract_lname").style.color = "green";
    } else {
        document.getElementById("extract_lname").style.color = "red";
    }
    document.getElementById("extract_lname").innerHTML = lname;
    document.getElementById("extract_age").innerHTML = age;
}

document.getElementById("btn").addEventListener("click", writeToDiv);

//-----------------------------------------BASIC 2 ----------------------------------------------

function changeColorProfession() {
    var profession = document.getElementById("profession").value;
    if (profession == "IT") {
        document.getElementById("profession").style.backgroundColor = "purple";
    } else if (profession == "Hospitality") {
        document.getElementById("profession").style.backgroundColor = "yellow";
    } else {
        document.getElementById("profession").style.backgroundColor = "white";
    }
}

document.getElementById("profession").addEventListener("click",changeColorProfession);


//-----------------------------------------INTERMEDIATE 1 ----------------------------------------------
var len = document.getElementsByClassName("santa").length;

function removeSanta() {
    for (let i = 0; i < len; i++) {
        this.style.opacity = "0";
        this.style.transition = "1s";
    }
}


for (let i = 0; i < len; i++) {

    document.getElementsByClassName("santa")[i].addEventListener("click", removeSanta);

}

//-----------------------------------------INTERMEDIATE 2 ----------------------------------------------

// var random_red = Math.floor(Math.random() * 256);
// var random_green = Math.floor(Math.random() * 256);
// var random_blue = Math.floor(Math.random() * 256);

// var random_color = "rgb(" + random_red + "," + random_green + "," + random_blue + ")";


function changeBackroundColor() {
    var random_red = Math.floor(Math.random() * 256);
    var random_green = Math.floor(Math.random() * 256);
    var random_blue = Math.floor(Math.random() * 256);

    var random_color = "rgb(" + random_red + "," + random_green + "," + random_blue + ")";

    document.getElementsByTagName("body")[0].style.backgroundColor = random_color;
}


document.getElementsByTagName("button")[0].addEventListener("click", changeBackroundColor);



