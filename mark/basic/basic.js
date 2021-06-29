// Basic 1 
// function outputData() {
//     var firstName = document.getElementById("fname").value;
//     var lastName = document.getElementById("lname").value;
//     var age = document.getElementById("age").value;

//     document.getElementById("output").innerHTML += firstName + "<br>" + lastName + "<br>" + age; 
    
//     firstName = document.getElementById("fname").value = "";
//     lastName = document.getElementById("lname").value = "";
//     age = document.getElementById("age").value= "";
// }

// document.getElementById("btn").addEventListener("click", outputData);



// Basic 2
function outputData() {
    var profession = document.getElementById("select").value;
    var firstName = document.getElementById("fname").value;
    var lastName = document.getElementById("lname").value;
    var age = document.getElementById("age").value;

    switch(profession) {
        case "IT":
            document.getElementById("output").style.background = "purple";
          break;
        case "Hospitality":
            document.getElementById("output").style.background = "green";
          break;
          case "University":
            document.getElementById("output").style.background = "lightblue";
            break;
        default:
         
      }
   
    document.getElementById("output").innerHTML += firstName + "<br>" + lastName + "<br>" + age; 
    
    firstName = document.getElementById("fname").value = "";
    lastName = document.getElementById("lname").value = "";
    age = document.getElementById("age").value= "";
}

document.getElementById("btn").addEventListener("click", outputData);