function togglestar() {
    document.querySelector('.like').classList.toggle("open");
  }
  
  const clickButton = document.querySelector('.like');
  clickButton.onclick = togglestar;