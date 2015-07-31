var vomit = require('../')
var lev = 0.5
document.getElementById('level').addEventListener('change', function (e) {
  lev = e.target.value  // set level!
  document.getElementById('output').textContent = vomit(document.getElementById('input').value, lev)
})
document.getElementById('input').addEventListener('keyup', function (e) {
  document.getElementById('output').textContent = vomit(document.getElementById('input').value, lev)
})
