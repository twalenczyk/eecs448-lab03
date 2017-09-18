// Author: Taylor Walenczyk
// Date Created: 9/18/2017

var showLengthError = false
var showMatchError = false
var showValidatedStatement = false

var validatePasswords = function() {
    let passwords = document.getElementsByName("password")
    let unverified = passwords[0]
    let verifier = passwords[1]

    if(unverified !== verifier) {
        showMatchError = true
    } else if(unverified.length !== verifier.length) {
        showLengthError = true
    } else {
        showValidatedStatement = true
    }
}
