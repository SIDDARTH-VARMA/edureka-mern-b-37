

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

function handlePasswordChange(){
    // 1. Reset error
    document.getElementById("error").innerText="";
    const schars = "!@#$%^&*()";
    for(let i=0; i<password.length; i++){
        if(schars.includes(password[i])){

        }
    }
    // 2. read Password
    const password = document.getElementById("inputPassword").value;
    // 1. Should be of 6-10 characters.
    // 2. Should contain atleast a number.
    var error="";
    // 3. get length of password
    const length = password.length;
    // 4. check for length error
    if(length<6 || length>10){
        error = "Password should contain 6-10 characters";
    }
    // 5. check for digits.
    else if(!/\d/.test(password)){
        error = "Password must contain a number";
    }
   
    document.getElementById("error").innerText=error;
}
