// Credit score checker (Week 10 in-class exercise)
// Disclosure: (Anthropic) Claude helped me move this into my portfolio and add the empty-box check.
// 4. A score goes in, its label comes back
function creditLabel(score) {
  if (score >= 800) {
    return "Exceptional";
  } else if (score >= 740) {
    return "Very Good";
  } else if (score >= 670) {
    return "Good";
  } else if (score >= 580) {
    return "Fair";
  } else {
    return "Poor";
  }
}

// 5. Read the score, find its label, and write it on the page
function showLabel() {
  const text = document.getElementById("score").value.trim();
  const rating = document.getElementById("rating");
  // My addition: empty or not a number gets a message
  if (text === "" || isNaN(Number(text))) {
    rating.textContent = "Type a score first, like 700.";
    return;
  }
  rating.textContent = creditLabel(Number(text));
}

// 6. A click on the Check button runs showLabel
const checkButton = document.getElementById("check");
checkButton.addEventListener("click", showLabel);

// 7. The score ranges: an array of objects (Monday)
const ranges = [
  { label: "Exceptional", min: 800 },
  { label: "Very Good", min: 740 },
  { label: "Good", min: 670 },
  { label: "Fair", min: 580 }
];

// 8. Find the empty list, then add one li for each range
const list = document.querySelector("#ranges");
ranges.forEach(function (r) {
  const li = document.createElement("li");               // create
  li.textContent = `${r.label}: ${r.min} and above`;     // fill
  list.appendChild(li);                                  // attach
});

// 9. Part II: five score factors, an array of objects
const factors = [
  { name: "Payment history", percent: 35 },
  { name: "Amounts owed", percent: 30 },
  { name: "Length of credit history", percent: 15 },
  { name: "Credit mix", percent: 10 },
  { name: "New credit", percent: 10 }
];

// 10. Find the second list, then add one li per factor
const factorList = document.querySelector("#factors");
factors.forEach(function (f) {
  const li = document.createElement("li");               // create
  li.textContent = `${f.name}: ${f.percent}%`;           // fill
  factorList.appendChild(li);                            // attach
});