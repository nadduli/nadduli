let navigation = document.getElementById("nav-sec");
let links = document.getElementsByClassName("link");
//using for loop to loop through an array of links
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(){
        let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
    })
}
