const form = document.querySelector('#form');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirmPassword');
const errorMessage = document.querySelector('.errorMessage');


form.addEventListener("submit", (e) => {
  if (password.value !== confirmPassword.value) {
    e.preventDefault();
    password.classList.add("notMatch");
    confirmPassword.classList.add("notMatch");
    errorMessage.innerHTML = '* Password do not match';
  } else {
    password.classList.remove("notMatch");
    confirmPassword.classList.remove("notMatch");
  }
});