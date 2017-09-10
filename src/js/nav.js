(function(JC) {

  var nav = JC.components.nav = {}

  var init = function () {
      nav.openDelay()
  };

  nav.open = function(){
    const nav = document.querySelector('.nav')
    nav.classList.add('open')
  };

  nav.close = function(){
    const nav = document.querySelector('.nav')
    nav.classList.remove('open')
  };

  nav.openDelay = function() {
      setTimeout(nav.open, 500)
  }

  EVT.on('init', init)

})(JC);
