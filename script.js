document.getElementById("Appointment").addEventListener("click", function(){
    window.location.href = "contact.html";
});

document.getElementById("seeDoc").addEventListener("click", function(){
  window.location.href = "doctor.html";
});


// Form Submit 
document.getElementById("send").addEventListener("click", function() {
  
  document.getElementById("appointmentForm").requestSubmit();
});

document.getElementById("appointmentForm").addEventListener("submit", function(e) {
  e.preventDefault(); 
  let firstName = document.getElementById("name").value;
  let lastName = document.getElementById("lname").value;
  let email = document.getElementById("Email").value;
  let phone = document.getElementById("number").value;
  let appointmentDate = document.getElementById("date").value;
  let appointmentTime = document.getElementById("time").value;
  let description = document.getElementById("description").value;

  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Email:", email);
  console.log("Phone:", phone);
  console.log("Appointment Date:", appointmentDate);
  console.log("Appointment Time:", appointmentTime);
  console.log("Description:", description);

  alert("Form submitted! Check the console for details.");
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

document.addEventListener("DOMContentLoaded", (e) => {
  // e.stopPropagation();
  const observer = new IntersectionObserver((entries) => {
    
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("show");
          } else {
              entry.target.classList.remove("show"); 
          }
      });
  }, { threshold: 0.1 });

  document.querySelectorAll(".box").forEach(element => {

      observer.observe(element);
  });
});

