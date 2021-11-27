
function loadDoc(fileName) {
  $("#content").load(fileName);
}

function navClickEvent() {

  let container = document.querySelector('.navContainer');
//I tried to use jquery for this but it didn't work. perhaps something to try another time
  container.addEventListener('click', function (e) {
    if (e.target != e.currentTarget) {
      e.preventDefault();
      let data = e.target.getAttribute('href');
      history.pushState(data, null, data);

    }
    e.stopPropagation();
  }, false);

}
window.onload = navClickEvent;