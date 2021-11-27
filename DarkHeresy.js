
function loadDoc(fileName) {
  $("#content").load(fileName);
}

function navClickEvent() {

  let container = document.querySelector('.navContainer');
//I tried to use jquery for this but it didn't work. perhaps something to try another time
  container.addEventListener('click', function (e) {
    if (e.target != e.currentTarget) {
      e.preventDefault();
      let data = e.target.getAttribute('data-name');
      let url = data + '.html';
      let page = e.target.getAttribute('href');
      loadDoc(page)
      history.pushState(page, null, url);
console.log(e.state);
    }

  }, false);

  window.addEventListener('popstate', function(e) {
    loadDoc(e.state);
  });
}
window.onload = navClickEvent;