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