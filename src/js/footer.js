(function(JC) {

  var footer = JC.components.footer = {}

  const f = document.querySelector('.footer');

  footer.openFooter = function() {
    f.classList.add('footer--open');
  }
  footer.closeFooter = function() {
    f.classList.remove('footer--open');
  };

  footer.delay = function(callback, time) {
    setTimeout(callback, time)
  };

  footer.interval = function(callback, time) {
    setInterval(callback, time)
  };

  footer.slideToggle = function() {
    f.classList.toggle('footer--open');
  };

  footer.init = function() {
    //footer.interval(footer.slideToggle, 2000);
    footer.delay(footer.openFooter, 2000);
  };

  EVT.on('init', footer.init);

})(JC);
