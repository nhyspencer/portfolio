// Disclosure: (Anthropic) Claude was used to help me set up this array, loop,
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
