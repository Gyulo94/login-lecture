console.log('hello');

const id = document.querySelector("#id")
const password = document.querySelector("#password")
const loginBtn = document.querySelector("button")

loginBtn.addEventListener("click", login);

const login = () => {
  const req = {
    id: id.value,
    pwd: password.value,
  };
  
  fetch('/login', {
    method: "POST",
    header: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(req),
  })
}


