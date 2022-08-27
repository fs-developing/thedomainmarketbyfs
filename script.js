(function changeText(){
        
    count = 1;
    setInterval(function(){
      let text = [
      '<a style="color: rgb(60, 60, 60);">Fantastic</a> Domains<br /> <a style="color: rgb(60, 60, 60);">Fantastic</a> Prices<br />',
      '<a style="color: rgb(60, 60, 60);">Mega Domain</a> Sale<br /> Save up to 70%<br />'
      ]


      count += 1;
      if(count == 1){
        document.getElementById("htext").innerHTML = text[0];
        document.getElementById("homebox").style.backgroundImage = "url(pics/p3.png)";
        document.getElementById("undertext").innerHTML = "Your reliable online domain archive";
      }

      else if(count == 2){
        document.getElementById("htext").innerHTML = text[1];
        document.getElementById("homebox").style.backgroundImage = "url(pics/p4.png)";
        count -= 2;
      }
    }, 10000);

})();

function openNav(){
    document.getElementById("mobilemenu").style.display = "block";
    document.getElementById("checkbtn").onclick = closeNav;
    document.getElementById("checkbtn").innerHTML = "&#10005;";
    document.getElementById("checkbtn").style.fontSize = "25px";


  }

function closeNav(){
    document.getElementById("mobilemenu").style.display = "none";
    document.getElementById("checkbtn").onclick = openNav;
    document.getElementById("checkbtn").innerHTML = "&#9776;";
    document.getElementById("checkbtn").style.fontSize = "30px";
  }

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
