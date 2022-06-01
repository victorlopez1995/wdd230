const year = document.querySelector('#currentyear')
const today = document.querySelector('#currentdate')
const lastmodific = document.querySelector('#lastModific');
const now = new Date();

const fulldateUK = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);
today.textContent = `${fulldateUK}`;
year.textContent = new Date().getFullYear();
lastmodific.textContent = document.lastModified;


function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;

let d = new Date().getDay();

const banner = document.getElementById("banner");
if (d === 1 || d === 2) {
	banner.style.display = "flex";
	banner.style.justifyContent = "space-between";
}

const close1 = document.querySelector("#close");
close1.style.color = "red" ;
close1.addEventListener("click", () => {
	banner.style.display = "none";
});

// initialize display elements
const lastDisplay = document.querySelector(".day-since");
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));
let lastVisit = Number(window.localStorage.getItem("visits-number"));
// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
	visitsDisplay.textContent = numVisits;
} else {
	visitsDisplay.textContent = `This is your first visit!`;
}
if (lastVisit !== 0) {
	lastDisplay.textContent =Math.trunc((Date.now() - lastVisit)/86400000);
} else {
	lastDisplay.textContent = `This is your first visit!`;
}
// increment the number of visits.
numVisits++;
lastVisit = Date.now();
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
localStorage.setItem("visits-number", lastVisit)

