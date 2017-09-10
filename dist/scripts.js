'use strict';

var JC = JC !== undefined ? JC : {};

JC.components = {};

var EVT = new EventEmitter2();

(function () {
  window.addEventListener('DOMContentLoaded', function () {
    EVT.emit('init');
  });
})();
'use strict';

(function () {
  var droplet = document.querySelector('.droplet');
  droplet.style.opacity = 0;
  function fadeInDroplet() {
    setTimeout(function () {
      droplet.style.opacity = 1;
    }, 2000);
  }
  //EVT.on('init', fadeInDroplet)
})();
'use strict';

(function (JC) {

  var footer = JC.components.footer = {};

  var f = document.querySelector('.footer');

  footer.openFooter = function () {
    f.classList.add('footer--open');
  };
  footer.closeFooter = function () {
    f.classList.remove('footer--open');
  };

  footer.delay = function (callback, time) {
    setTimeout(callback, time);
  };

  footer.interval = function (callback, time) {
    setInterval(callback, time);
  };

  footer.slideToggle = function () {
    f.classList.toggle('footer--open');
  };

  footer.init = function () {
    //footer.interval(footer.slideToggle, 2000);
    footer.delay(footer.openFooter, 2000);
  };

  EVT.on('init', footer.init);
})(JC);
'use strict';

(function (JC) {

  var nav = JC.components.nav = {};

  var init = function init() {
    nav.openDelay();
  };

  nav.open = function () {
    var nav = document.querySelector('.nav');
    nav.classList.add('open');
  };

  nav.close = function () {
    var nav = document.querySelector('.nav');
    nav.classList.remove('open');
  };

  nav.openDelay = function () {
    setTimeout(nav.open, 500);
  };

  EVT.on('init', init);
})(JC);

//# sourceMappingURL=scripts.js.map