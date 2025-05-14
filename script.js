// Click Event
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("You clicked the button! 🎉");
});

// Hover Effect
const hoverBox = document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => hoverBox.style.backgroundColor = "lightgreen");
hoverBox.addEventListener("mouseout", () => hoverBox.style.backgroundColor = "lightblue");

// Keypress Detection
const keyInput = document.getElementById("keyInput");
keyInput.addEventListener("keyup", (e) => {
  document.getElementById("keypressOutput").textContent = `You typed: ${e.key}`;
});

// Change Button Color
document.getElementById("changeColorBtn").addEventListener("click", function () {
  this.style.backgroundColor = this.style.backgroundColor === "crimson" ? "dodgerblue" : "crimson";
});

// Image Gallery
function changeImage(el) {
  document.getElementById("mainImage").src = el.src;
}

// Form Validation
document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!emailPattern.test(email)) {
    feedback.textContent = "Please enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Form submitted successfully! 🎉";
  feedback.style.color = "green";
});
