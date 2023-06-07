const firstname = document.querySelector("#firstname");
const lastname = document.querySelector("#lastname");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const errorname = document.querySelector(".errorname");
const errorlastname = document.querySelector(".errorlastname");
const errormail = document.querySelector(".errormail");
const errorpass = document.querySelector(".errorpass");
const button = document.querySelector(".button");
const icon = document.querySelector(".icon"); //firstname
const icon1 = document.querySelector(".icon1"); //lastname
const icon2 = document.querySelector(".icon2"); //email
const icon3 = document.querySelector(".icon3"); //password

let mailregex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

// if mailregex works
function mailtest(email, errormail) {
  const isValid = mailregex.test(email.value);
  if (isValid) {
    errormail.classList.remove("visibility");
    icon2.classList.remove("visibility");
    email.classList.remove("error");
  } else {
    errormail.classList.add("visibility");
    icon2.classList.add("visibility");
    email.classList.add("error");
  }
}

// check if the name is written
function check() {
  if (firstname.value !== "") {
    errorname.classList.remove("visibility");
    firstname.classList.remove("error");
    icon.classList.remove("visibility");
  } else {
    errorname.classList.add("visibility");
    firstname.classList.add("error");
    icon.classList.add("visibility");
  }
}
// if lastname is written
function lastnamecheck() {
  if (lastname.value !== "") {
    errorlastname.classList.remove("visibility");
    lastname.classList.remove("error");
    icon1.classList.remove("visibility");
  } else {
    errorlastname.classList.add("visibility");
    lastname.classList.add("error");
    icon1.classList.add("visibility");
  }
}

// password
function passwordcheck() {
  if (password.value !== "") {
    errorpass.classList.remove("visibility");
    icon3.classList.remove("visibility");
    password.classList.remove("error");
  } else {
    errorpass.classList.add("visibility");
    icon3.classList.add("visibility");
    password.classList.add("error");
  }
}

button.addEventListener("click", () => {
  check(firstname, errorname);
  lastnamecheck(lastname, errorlastname);
  mailtest(email, errormail);
  passwordcheck(password, errorpass);
});
