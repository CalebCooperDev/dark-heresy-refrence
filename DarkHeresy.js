"use strict";
function loadDoc(fileName) {
  $("#content").load(fileName);
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
    if (e.target != e.currentTarget) {
      e.preventDefault();
      let page = e.target.getAttribute('href');
      loadDoc(page);
      history.pushState(page, null, null);

    }

  }, false);

  window.addEventListener('popstate', function(e) {
    loadDoc(e.state);
  });
}
window.onload = navClickEvent;