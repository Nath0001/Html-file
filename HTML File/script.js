 function toggleButton(side) {
      const toggle = document.getElementById("toggle");
      const button = document.getElementById("toggle-button");

      if(side=== 'right') {
      toggle.classList.remove("toggle-left");
      toggle.classList.remove("toggle-right");
    }else {
      toggle.classList.remove("toggle-right");
      toggle.classList.remove("toggle-left");
    }
    
    buttons.forEach(btn => btn.classList.remove(active));
    buttons[side=== 'right' ? 1 : 0].classList.add(active);
  }

  function toggleArrow(direction) {
    const arrowLeft = document.querySelector('.arrow-left');
    const arrowRight = document.querySelector('.arrow-right');

    if (direction === 'left') {
        arrowLeft.classList.toggle('down');
    } else if (direction === 'right') {
        arrowRight.classList.toggle('down');
    }
}