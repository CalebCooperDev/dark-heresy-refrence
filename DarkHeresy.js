"use strict";
function loadDoc(fileName) {
  $("#content").load(fileName);
}



/**
 * multi-purpose random number generator to simulate the rolling of any type of die.
 * @param min lowest value on the die
 * @param max highest value on the die
 * @returns {number}
 */
function rollEm(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function psykerSideEffects() {

  $("a[data-name='psyker']").click(function() {
    $.getScript("CareerPaths/Psyker/Psyker.js");
  })
}
/**
 * click event for aside navigation.  onclick of link loads relevant HTML using AJAX and updates window.history
 * object to maintain ease of navigation
 */
function navClickEvent() {
loadDoc('cover.html');
  let container = document.querySelector('.navContainer');
//I tried to use jquery for this but it didn't work. perhaps something to try another time
  container.addEventListener('click', function (e) {
    if (e.target !== e.currentTarget) {
      e.preventDefault();
      let page = e.target.getAttribute('href');
      loadDoc(page);
      history.pushState(page, null, null);

    }

  }, false);

  window.addEventListener('popstate', function(e) {
    loadDoc(e.state);
  });

  psykerSideEffects();
}
window.onload = navClickEvent;