// Verify Email Fields
const email = document.querySelector(".subscription form .email");
const wrong = document.querySelector(".subscription form .wrong");
const submit = document.querySelector(".subscription form .submit");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

submit.addEventListener("click", (e) => {
  e.preventDefault();
  if (email.value != "") {
    validEmail();
  } else {
    wrong.style.display = "block";
  }
});

function validEmail() {
  if (!emailRegex.test(email.value)) {
    wrong.style.display = "block";
  } else {
    wrong.style.display = "none";
    email.value = "";
  }
}
