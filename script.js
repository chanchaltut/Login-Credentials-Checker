document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const userName = document.getElementById("userName").value;
    const password = document.getElementById("password").value;

    const message = login(userName, password);
    const isSuccess = userName === "Hey_Coders" && password === "Trust_Me";

    displayMessage(message, isSuccess);
    triggerAnimation(isSuccess);
  });

function login(userName, password) {
  if (userName === "" || password === "") {
    return "Fields are empty! Please provide credentials.";
  } else if (userName === "Hey_Coders" && password === "Trust_Me") {
    return "Welcome back, Code Master!";
  } else {
    return "Access Denied! Invalid credentials.";
  }
}

function displayMessage(message, isSuccess) {
  const messageContainer = document.createElement("div");
  messageContainer.className = `message-container ${
    isSuccess ? "success" : "error"
  }`;
  messageContainer.innerText = message;
  document.body.appendChild(messageContainer);

  setTimeout(() => {
    messageContainer.remove();
  }, 3000);
}

function triggerAnimation(isSuccess) {
  if (isSuccess) {
    triggerParticleEffect();
  } else {
    triggerGlitchEffect();
  }
}

function triggerParticleEffect() {
  const confetti = document.createElement("canvas");
  confetti.id = "confettiCanvas";
  document.body.appendChild(confetti);

  const particles = new window.confetti.create(confetti, { resize: true });
  particles({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
  });

  setTimeout(() => confetti.remove(), 3000);
}

function triggerGlitchEffect() {
  document.body.classList.add("glitch");
  setTimeout(() => document.body.classList.remove("glitch"), 2000);
}
