console.log('hello');

const id = document.querySelector("#id")
const password = document.querySelector("#password")
const loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", login);

const login = () => {
  const req = {
    id: id.value,
    psword: password.value,
  };
  console.log(req);
}


