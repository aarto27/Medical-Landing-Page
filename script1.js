
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



document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          } else {
              entry.target.classList.remove("show"); 
          }
      });
  }, { threshold: 0.1 });

    document.querySelectorAll(".carousel-item").forEach(element => {
      observer.observe(element);
      });
      document.querySelectorAll(".box").forEach(element => {
        observer.observe(element);
      });
      document.querySelectorAll(".carousel").forEach(element => {
        observer.observe(element);
      });
      document.querySelectorAll(".section-1-info").forEach(element => {
        observer.observe(element);
      });
      document.querySelectorAll(".section2-info").forEach(element => {
        observer.observe(element);
      });
      document.querySelectorAll(".doc-list").forEach(element => {
        observer.observe(element);
      });
      document.querySelectorAll(".doc-img1").forEach(element => {
        observer.observe(element);
      });
      document.querySelectorAll(".doc-paa").forEach(element => {
        observer.observe(element);
      });
      document.querySelectorAll(".doc-info").forEach(element => {
        observer.observe(element);
      });
});
