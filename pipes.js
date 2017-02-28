m = 256;
co = [m, m, m];
cd = -1;
or = 0;
function col() {
    if (cd == 1) {
      if (co[1] < m) {co[1]++ ;return co}
      if (co[0] < m) {co[0]++ ;return co}
      if (co[1] === m) {cd = -1}
    } else {

      if (co[2] > 0) {co[2]-- ;return co}
      if (co[1] > 0) {co[1]-- ;return co}
      if (co[0] > 150) {co[0]-- ;return co}
      if (co[0] === 150) {cd = 1}
    }
}
pos = {x: 0, y: 0}
function add(X, Y) {
    col();
    pos.x = X;
    pos.y = Y;
    c.beginPath();
    c.arc(X, Y, 50, 0, 2 * Math.PI);
    c.strokeStyle = 'rgb(' + co[0] + ',' + co[1] + ',' + co[2] + ')';
    c.stroke();
}
window.addEventListener('click', function (e) {
  add (e.clientX, e.clientY)
});
add(parseInt(Math.random() * 500), parseInt(Math.random() * 500));
dirX = 1;
dirY = 1;
setInterval(function() {
  X = pos.x + dirX;
  Y = pos.y + dirY;
  if (Y > a.height - 50) dirY = -1;
  if (Y < 50) dirY = 1;
  if (X > a.width - 50) dirX = -1;
  if (X < 50) dirX = 1;
  add(X, Y);

}, 5);