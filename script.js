document.getElementById("Appointment").addEventListener("click", function(){
    window.location.href = "contact.html";
})

document.getElementById("send").addEventListener("click", function(){
    alert('Your data has been submitted ')
})


// JS for PopUp
let popBtn = document.querySelector("#popbtn");
let popUp = document.querySelector("#popup");
let close = document.querySelector(".close");


popBtn.addEventListener("click", function(){
  popUp.style.display = "block";
});

// close.addEventListener("click", function(){
//   popUp.style.display = "none";
//   });
