// Author: Taylor Walenczyk
// Date Created: 9/18/2017

var course = [
    "file:///Users/twalen/Desktop/eecs_448/Lab_03/slideshow/resources/images/circling-raven-golf-course-15.jpg",
    "file:///Users/twalen/Desktop/eecs_448/Lab_03/slideshow/resources/images/el-camaleon.jpg",
    "file:///Users/twalen/Desktop/eecs_448/Lab_03/slideshow/resources/images/fieldstone-gc-1.jpg",
    "file:///Users/twalen/Desktop/eecs_448/Lab_03/slideshow/resources/images/Kauai-Oceanfront-Golf-Course.jpg",
    "file:///Users/twalen/Desktop/eecs_448/Lab_03/slideshow/resources/images/puakea_golf_course.jpg"
]

var next = function(current) {
    if(current === course[0]) {
        document.getElementById("course").setAttribute("src", course[1])
    } else if(current === course[1]) {
        document.getElementById("course").src = course[2]
    } else if(current === course[2]) {
        document.getElementById("course").src = course[3]
    } else if(current === course[3]) {
        document.getElementById("course").src = course[4]
    } else if(current === course[4]) {
        document.getElementById("course").src = course[0]
    }
}
