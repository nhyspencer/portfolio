// Temperature converter (Week 9 in-class exercise)
// Disclosure: (Anthropic) Claude helped me move this into my portfolio and add the empty-box check.
const form = document.getElementById("convert");
form.addEventListener("submit", convert);

function convert(event) {
  event.preventDefault(); // stay on this page
  const text = document.getElementById("celsius").value.trim();
  const result = document.getElementById("result");
  // My addition: if the box is empty or not a number, say so
  if (text === "" || isNaN(Number(text))) {
    result.textContent = "Type a number first, like 25.";
    return;
  }
  const celsius = Number(text);
  const fahrenheit = celsius * 9 / 5 + 32;
  result.textContent = `${celsius} degrees C is ${fahrenheit} degrees F`;
}
