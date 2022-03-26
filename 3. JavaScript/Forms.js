

// Handle when name field changes
function handleNameChange(){
    // 1. get name element and its value
    const name = document.getElementById("inputName").value;
    console.log(name);
    // update label
    document.getElementById("lblNameField").innerText = name;
}

// Handle when name field changes
function handleUserNameChange(){
    // 1. get name element and its value
    const name = document.getElementById("inputUserName").value;
    console.log(name);
    // update label
    document.getElementById("lblUsernameField").innerText = name;
}

function handleCountryChange(){
    const country = document.getElementsByClassName("form-select")[0];
    console.log(country);
    const labelValue = country.options[country.selectedIndex].text;
    document.getElementById("ddlCountryLabel").innerText=labelValue;
}

function handleGenderChange(){
    // get both elements by using getElementsByName
    const genderElements = document.getElementsByName("gender");
    const isMale = genderElements[0].checked;
    const isFeMale = genderElements[1].checked;
    document.getElementById("lblGenderField").innerText=isMale ? "Male" : "Female";
}

function handleButtonClick(){
    document.getElementById("signupForm").style.backgroundColor="lightgreen";
    alert("Form is submitted");
}