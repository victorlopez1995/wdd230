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
