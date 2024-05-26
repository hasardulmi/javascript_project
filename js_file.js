function moveImage() {
    var image = document.getElementById("moveImage");
    if (image.style.left === "0px") {
        image.style.left = "calc(100% - " + image.clientWidth + "px)";
    } 
    else {
        image.style.left = "0px";
    }
}

function resizeImage() {
    var image = document.getElementById("resizeImage");
    if (image.style.width === "200px") {
        image.style.width = "400px";
        image.style.height = "300px"; 
    } else {
        image.style.width = "200px";
        image.style.height = "150px";
    }
}

function validateForm() {
    var name = document.getElementById("name").value;
    var telephone = document.getElementById("telephone").value;
    var email = document.getElementById("email").value;
    var telephonePattern = /^\d{10}$/;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (name === "" || telephone === "" || email === "") {
        alert("Please fill in all fields.");
        return false;
    }
  
    if (!telephonePattern.test(telephone)) {
        alert("Please enter a valid telephone number (10 digits).");
        return false;
    }
  
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
  
    alert("Form submitted successfully!");
    return true;
  }