const year = document.querySelector('#currentyear');
const year2 = document.querySelector('#currentyear-2');
year.textContent = new Date().getFullYear();
year2.textContent = new Date().getFullYear();

const lastmodific = document.querySelector('#currentdate');
const lastmodific2 = document.querySelector('#currentdate2');

try {
    lastmodific.textContent = document.lastModified;
    lastmodific2.textContent = document.lastModified;
  } catch (e) {
    alert('Error with code or your browser does not support Locale');
  }