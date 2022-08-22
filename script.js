filterSelection("all")
function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("domaincolumn");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1) AddClass(x[i], "show");
    }
}

function AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
    }
}

function RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("checkboxes");
var btns = btnContainer.getElementsByClassName("selectbtn");
for (var i = 0; i < btns.length; i++) {
btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("activio");
    current[0].className = current[0].className.replace(" activio", "");
    this.className += " activio";
});
}


// Function which shows contact form
function showmore(){
    document.getElementById("contactform").style.display = "block";
    document.getElementById("morebtn").innerHTML = "Hide Contact Form";
    document.getElementById("morebtn").onclick = showless;
}

function showless(){
    document.getElementById("contactform").style.display = "none";
    document.getElementById("morebtn").innerHTML = "Get in contact with us";
    document.getElementById("morebtn").onclick = showmore;
}