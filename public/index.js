const navbar = document.querySelector("#navbar")
const menu = document.querySelector("#menubtn")

menu.addEventListener("click", () => {
    if (navbar.classList.contains("-ml-52")) {
        navbar.classList.remove("-ml-52");
        navbar.classList.add("ml-0");
    } else {
        navbar.classList.remove("ml-0");
        navbar.classList.add("-ml-52");
    }
    let closed = navbar.classList.contains('-ml-52');
    if (closed) {
        menu.classList.remove("fa-xmark");
        menu.classList.add("fa-bars");
    } else {
        menu.classList.remove("fa-bars");
        menu.classList.add("fa-xmark");
    }
})

window.addEventListener("touchstart", e => {
    if (!navbar.contains(e.target) && (!menu.contains(e.target))){
    navbar.classList.remove("ml-0");
    navbar.classList.add("-ml-52");
    menu.classList.remove("fa-xmark");
    menu.classList.add("fa-bars");
  } 
});

const form = document.querySelector("#contact");

form.addEventListener("submit", e => {
    e.preventDefault();
    
    const fname = form.fname.value.trim();
    const fnameErr = form.querySelector("#fnameErr");
    const lname = form.lname.value.trim();
    const email = form.email.value.trim();
    const emailErr = form.querySelector("#emailErr");
    const phone = form.phone.value.trim();
    const contactMethod = form.contactMethod.value.trim();
    const subject = form.subject.value.trim();
    const address = form.address.value.trim();
   
    const err = {};
    
    if (fname.length < 2){
        err.fname = "First name is missing";
        fnameErr.innerText = err.fname
    } else {
        delete err.fname;
        fnameErr.innerText = "";
    }
    if (email.length < 6 || !email.includes("@") || !email.includes(".")){
        err.email = "Valid email is missing";
        emailErr.innerText = err.email;
    } else {
        delete err.email;
        emailErr.innerText = "";
    }
    if (!Object.keys(err).length > 0){
        document.querySelector("#contact").submit();
    } 
    });