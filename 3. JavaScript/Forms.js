

// Handle when name field changes
function handleNameChange(){
    // 1. get name element and its value
    const name = document.getElementById("inputName").value;
    console.log(name);
    // update label
    document.getElementById("lblNameField").innerText = name;
}