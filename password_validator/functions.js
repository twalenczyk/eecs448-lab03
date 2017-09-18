// Author: Taylor Walenczyk
// Date Created: 9/18/2017

var validatePasswords = function() {
    let passwords = document.getElementsByName("password")
    let unverified = passwords[0].value
    let verifier = passwords[1].value

    if(unverified.length < 8) {
        document.getElementById("length_error").style.visibility="visible"
        validated = false
    } else if(unverified !== verifier) {
        document.getElementById("match_error").style.visibility="visible"
        validated = false
    } else {
        document.getElementById("match_error").style.visibility="hidden"
        document.getElementById("length_error").style.visibility="hidden"
        document.getElementById("validated").style.visibility="visible"
    }
}
