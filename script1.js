
let currentPage = window.location.pathname.split("/").pop();


const links = document.querySelectorAll(".doc-header-sec a");

links.forEach((link) => {
    let linkPath = link.getAttribute("href");

   
    if (linkPath === currentPage) {
        link.classList.add("active");
    } else {
        link.classList.remove("active");
    }
});

// JS for PopUp
let popBtn = document.querySelector("#popbtn");
let popUp = document.querySelector("#popup");
let close = document.querySelector(".nav-a2");


popBtn.addEventListener("click", function(){
  popUp.style.display = "block";
});

close.addEventListener("click", function(){
  popUp.style.display = "none";
});