
  
  function openCity(evt, cityName) {
// Declare all variables
var i, content,link;

// Get all elements with class="tabcontent" and hide them
content = document.getElementsByClassName("content");
for (i = 0; i < content.length; i++) {
  content[i].style.display = "none";
}

// Get all elements with class="tablinks" and remove the class "active"
link= document.getElementsByClassName("link");
for (i = 0; i < link.length; i++) {
  link[i].className = link[i].className.replace(" active", "");
}

// Show the current tab, and add an "active" class to the link that opened the tab
document.getElementById(cityName).style.display = "block";
evt.currentTarget.className += " active";
}
