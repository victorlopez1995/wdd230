const year = document.querySelector('#currentyear')

const lastmodific = document.querySelector('#lastModific');

year.textContent = new Date().getFullYear();
lastmodific.textContent = document.lastModified;


function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;