// Author: Taylor Walenczyk
// Date Created: 9/18/2017

var course = [
    "resources/images/circling-raven-golf-course-15.jpg",
    "resources/images/el-camaleon.jpg",
    "resources/images/fieldstone-gc-1.jpg",
    "resources/images/Kauai-Oceanfront-Golf-Course.jpg",
    "resources/images/puakea_golf_course.jpeg"
]
var curIndex = 0


var next = function() {
    let pic = document.getElementById("course")
    curIndex++
    if(curIndex == 5) {
        curIndex = 0
    }
    pic.src = course[curIndex]
}

var previous = function() {
    let pic = document.getElementById("course")
    curIndex--
    if(curIndex == -1) {
        curIndex = 4
    }
    pic.src = course[curIndex]
}
