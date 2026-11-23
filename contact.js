// Contact form check (A7). Pattern from the signup.js type-along.
// Disclosure: (Anthropic) Claude helped me write this and I checked it against the Assignment 7 list.
const form = document.getElementById("contact-form");
const nameBox = document.getElementById("name");
const emailBox = document.getElementById("email");
const messageBox = document.getElementById("message");
const thanks = document.getElementById("thanks");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading
  thanks.textContent = "";
  let ok = true;

  // name: required covers empty, this covers just spaces
  if (nameBox.value.trim() === "") {
    document.getElementById("name-msg").textContent = "Please type your name.";
    ok = false;
  } else {
    document.getElementById("name-msg").textContent = "";
  }

  // email: type="email" in the HTML checks the format
  document.getElementById("email-msg").textContent = "";

  // my own rule: the message must be at least 20 characters
  if (messageBox.value.trim().length < 20) {
    document.getElementById("message-msg").textContent =
      "Your message is " + messageBox.value.trim().length + " characters. Please write at least 20.";
    ok = false;
  } else {
    document.getElementById("message-msg").textContent = "";
  }

  if (ok) {
    thanks.textContent = "Thanks, " + nameBox.value.trim() + "! Your message passed the check.";
    form.reset();
  }
});
