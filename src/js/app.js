var JC = JC !== undefined ? JC : {};

JC.components = {}

var EVT = new EventEmitter2();

(function() {
  window.addEventListener('DOMContentLoaded', function() {
    EVT.emit('init')
  })
})();

