function validateEmail() {
    let isValid = false;
const emailAddress = // Get the emailAddress's input value
//set the textContent of emailError as empty string.

if (emailAddress === "" || !emailAddress.includes("@")) {
//set the content in emailError to "Please enter a valid email address";
} else {
isValid = true;
console.log("Email is valid: ", emailAddress);

}

if(isValid){
// This submitRequest is a custom function that will be called when everything is valid
    
submitRequest();
}
}