document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    const message = login(userName, password);

    displayMessage(message);
  });

function login(userName, password) {
  if (userName === "" || password === "") {
    return "Empty, Please enter your userName and password";
  } else if (userName === "Hey_Coders" && password === "Trust_Me") {
    return "Congrats :) Successfully logged in";
  } else {
    return "Sorry! Incorrect login credentials, Please try again";
  }
}

function displayMessage(message) {
  const messageContainer = document.createElement("div");
  messageContainer.className = "message-container";
  messageContainer.innerText = message;
  document.body.appendChild(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, 3000);
}

document.head.appendChild(style);
