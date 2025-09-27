welcomeMessage();

//welcome message function
function welcomeMessage() {
    let userName = prompt("Enter your name:");
    if (userName) {
        document.getElementById("userName").innerHTML = userName;
        alert("Welcome to my portfolio, " + userName + "!");
    } else {
        alert("Welcome to my portfolio!");
    }
}

//form validation function
function validateForm() {
    // Get form values
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;

console.log(name, email, message);
    // Simple validation
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    alert("Thank you for your message, " + name + "!");
    return true;
}

window.onscroll = function() {
    const header = document.querySelector("header");
    const fixednav = header.offsetTop;

    if (window.pageYOffset > fixednav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }       
};