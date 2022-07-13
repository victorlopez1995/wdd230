function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open");
    document.getElementById("headerForm").classList.remove("open");
}
function toggleContacts() {
    document.getElementById("headerForm").classList.toggle("open");
    document.getElementById("primaryNav").classList.remove("open");
}

const getmenu = document.getElementById("MenuBtn");
getmenu.onclick = toggleMenu;
const getcontact = document.getElementById("ContactBtn");
getcontact.onclick = toggleContacts;