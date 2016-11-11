App.Collections.Entries = Backbone.Collection.extend({
  url: "/app_dev.php/api/entries",

  drawWinner: function() {
     this.resetWinner();

     winner = this.shuffle()[0];
     if (winner)
      {
       winner.set({ 'winner' : true});
       winner.save();
      }
  },
  resetWinner: function() {
    this.forEach(function(model, index) {
        model.set('winner', false);
        model.save();
    });  
  } 

});
