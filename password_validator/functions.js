// Author: Taylor Walenczyk
// Date Created: 9/18/2017

var showLengthError = false
var showMatchError = false
var showValidatedStatement = false

var validatePasswords = function() {
    console.log("Validating Passwords")
    let passwords = document.getElementsByName("password")
    let unverified = passwords[0].value
    let verifier = passwords[1].value
    let validated = true

    console.log(unverified.length)

    if(unverified.length < 8) {
        showLengthError = true
        validated = false
    } else if(unverified !== verifier) {
        showMatchError = true
        validated = false
    } else {
        showValidatedStatement = true
    }

    console.log(validated)
    return validated
}
