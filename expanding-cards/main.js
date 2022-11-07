//grab all the images and store them as an array
const panels = document.querySelectorAll('.panel');

//loop through the array, adding an event listener:
panels.forEach((panel) => {
  panel.addEventListener('click', function () {
    //when each panel is clicked, we call the function to remove the active class on all other panels and add the active class on the panel that was clicked
    removeActiveClasses();
    panel.classList.add('active');
  });
});

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active');
    //removes all the active classes
  });
}
