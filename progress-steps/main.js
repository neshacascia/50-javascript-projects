const progress = document.querySelector('#progress');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
const circles = document.querySelectorAll('.circle');

//this represents whichever circle is currently active, we set it to the first circle by default:
let currentActive = 1;

next.addEventListener('click', () => {
  currentActive++;

  //we do not want currentActive to be no more than 4
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
});

prev.addEventListener('click', () => {
  currentActive--;

  //in case currentActive falls below 1, we reset it back to 1
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, index) => {
    //since currentActive will always be ahead of our index by 1 when we click the next button, each circle will get added the active class
    if (index < currentActive) {
      circle.classList.add('active');

      // once we start clicking the previous button, index will be greater than currentActive, each circle will lose the active class
    } else {
      circle.classList.remove('active');
    }
  });

  // grabs all the circles with active class
  const actives = document.querySelectorAll('.active');

  // increases the width of the progress by 25%
  progress.style.width = (actives.length / 0.25) * 100 + '%';

  // if currentActive is 1, there are no circles before
  if (currentActive === 1) {
    prev.disabled = true;

    // if currentActive is 4, it's at the max, there are no circles after
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    // otherwise do not disable the prev or next button
    prev.disabled = false;
    next.disabled = false;
  }
}
