//declare variables
let myBurgerMenu = document.getElementById('openNav');
let topPallet = document.getElementById('firstPallet');
let middlePallet = document.getElementById('secondPallet');
let bottomPallet = document.getElementById('thirdPallet');
let navMenu = document.getElementById('navSlideIn');
let navLists = document.getElementById('navLists');
// eventlistener
myBurgerMenu.addEventListener('click', function() {
  // move the span tags
  middlePallet.classList.toggle('invisiblePallet');
  topPallet.classList.toggle('topPallet');
  bottomPallet.classList.toggle('bottomPallet');
  //slide in the nav
  navMenu.classList.toggle('navFullscreen');
  navLists.classList.toggle('navListsSlide');
});
