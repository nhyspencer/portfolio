// Disclosure: (OpenAI) ChatGPT was used to help me set up this array, loop,
// and the DOM lines, and to check them against the Assignment 5 checklist.

// Checklist 2: the array. These are my own recent favorite songs.
const favorites = [
  "beabadoobee, The Marias - All I Did Was Dream Of You",
  "Steve Lacy - the feeling",
  "Paramore - Conspiracy",
  "Slowdive - Dagger"
];

// Checklist 4: querySelector finds the empty <ul id="list">. The # means id, as in CSS.
const list = document.querySelector("#list");

// Checklist 3: forEach runs this function once for each song in the array.
favorites.forEach(function (song) {
  // Checklist 4: createElement makes a new, empty <li>. It is NOT on the page yet.
  const li = document.createElement("li");
  // textContent puts the song's words inside the new <li>.
  li.textContent = song;
  // appendChild adds the <li> to the end of the list. NOW it shows on the page.
  list.appendChild(li);
});

// Checklist 5: getElementById finds the empty <p id="count">. It takes the id with no #.
const count = document.getElementById("count");
// textContent writes the sentence. favorites.length counts the songs, so it is 4 right now.
count.textContent = "That's " + favorites.length + " songs on repeat right now.";

// A6 feature: the Rec board. Visitors add songs, and they show up in a list.
// Disclosure: (Anthropic) Claude wrote this part from my prompt, and I checked it against the Assignment 6 instructions.

// querySelector finds each element by its id (the # means id, as in CSS).
const songBox = document.querySelector("#rec-song");
const nameBox = document.querySelector("#rec-name");
const addBtn = document.querySelector("#add-rec");
const clearBtn = document.querySelector("#clear-recs");
const recMessage = document.querySelector("#rec-message");
const recList = document.querySelector("#rec-list");
const recCount = document.querySelector("#rec-count");

// recs is the array that holds every rec added so far. It starts empty.
let recs = [];

// showRecs redraws the whole list from the recs array.
function showRecs() {
  // Setting textContent to "" empties the list, so the old items do not pile up.
  recList.textContent = "";
  // forEach runs once for each rec in the array, like the Recent favorites list above.
  recs.forEach(function (rec) {
    const li = document.createElement("li");
    li.textContent = rec;
    recList.appendChild(li);
  });
  // The count line changes with how many recs there are.
  if (recs.length === 0) {
    recCount.textContent = "No recs yet. Be the first!";
  } else if (recs.length === 1) {
    recCount.textContent = "1 rec on the board.";
  } else {
    recCount.textContent = recs.length + " recs on the board.";
  }
}

// addRec runs when the Add rec button is clicked.
function addRec() {
  // .value reads what was typed. .trim() cuts off spaces at the start and end.
  const song = songBox.value.trim();
  let who = nameBox.value.trim();
  // If the song box is empty, say so and stop. return ends the function early.
  if (song === "") {
    recMessage.textContent = "Type a song first.";
    return;
  }
  // If the name box is empty, use Anonymous.
  if (who === "") {
    who = "Anonymous";
  }
  // push adds the new rec to the end of the array.
  recs.push(song + " (from " + who + ")");
  showRecs();
  // Empty the song box so it is ready for the next one.
  songBox.value = "";
  recMessage.textContent = "Thanks! Your rec is on the board.";
}

// clearRecs runs when the Clear board button is clicked.
function clearRecs() {
  // A new empty array replaces the old one.
  recs = [];
  showRecs();
  recMessage.textContent = "Board cleared.";
}

// addEventListener runs a function each time its button gets a click.
// There are no () after the function names, because I am handing over the function, not running it now.
addBtn.addEventListener("click", addRec);
clearBtn.addEventListener("click", clearRecs);

// Run showRecs once when the page loads, so the "No recs yet" line shows up.
showRecs();
