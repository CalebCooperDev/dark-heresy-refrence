function loadDoc(fileName) {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       document.getElementById("content").innerHTML = this.responseText;
      }
    };
    xhttp.open("GET", "/CareerPaths/Adept/Character_Adept.html", true);
    xhttp.send();
  }