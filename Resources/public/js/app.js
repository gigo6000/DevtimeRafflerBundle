window.App = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  init: function() {
    new App.Routers.Entries();
    Backbone.history.start();
  }
};

$(document).ready(function(){
  App.init();
});
