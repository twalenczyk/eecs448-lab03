// Author: Taylor Walenczyk
// Date Created: 9/24/2017

var getInput = function() {
    // border values
    let borderRVal = document.getElementById("borderRedValue").value
    let borderGVal = document.getElementById("borderGreenValue").value
    let borderBVal = document.getElementById("borderBlueValue").value
    let borderWidth = document.getElementById("borderWidth").value

    // background values
    let backgroundRVal = document.getElementById("backgroundRedValue").value
    let backgroundGVal = document.getElementById("backgroundGreenValue").value
    let backgroundBVal = document.getElementById("backgroundBlueValue").value

    // grab paragraph
    let p = document.getElementById("dummyText")

    // checks for color direction
    if(borderRVal != null || borderGVal != null || borderBVal != null) {
        let rgbValue = "rgb(" + borderRVal + ", " + borderGVal + ", " + borderBVal + ")"
        p.style.borderColor = rgbValue
    }

    // Change border width
    if(borderWidth != null) {
        let bw = "" + borderWidth + "px"
        p.style.borderWidth = bw
        p.style.borderStyle = "solid" // forec appearance
    }
}
