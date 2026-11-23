// Dark mode button (In-class Exercise #10). Runs on every page.
// Disclosure: (Anthropic) Claude helped me write this and I checked it against the Assignment 7 list.
const themeBtn = document.getElementById("theme-btn");

themeBtn.addEventListener("click", function () {
  // toggle adds the class "light" if it is missing and removes it if it is there
  document.body.classList.toggle("light");
  if (document.body.classList.contains("light")) {
    themeBtn.textContent = "Dark mode";
  } else {
    themeBtn.textContent = "Light mode";
  }
});
