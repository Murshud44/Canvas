'use strict'
function handleMenu() {
    const canvas = document.getElementById('canvas');
    const menu = document.getElementById('menu');
  
    function adjustMenu() {
      const canvasWidth = canvas.offsetWidth;
      const menuItems = menu.querySelectorAll('li');
  
      if (canvasWidth < 600) {
        menuItems.forEach((item) => {
          item.style.display = 'block';
        });
      } else {
        menuItems.forEach((item) => {
          item.style.display = 'inline-block';
        });
      }
    }
  

    adjustMenu();
  
    window.addEventListener('resize', adjustMenu);
}
window.addEventListener('load', handleMenu);
