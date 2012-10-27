App.Collections.Entries = Backbone.Collection.extend({
  url: "/app_dev.php/api/entries",

  drawWinner: function() {
     winner = this.shuffle()[0];
     if (winner)
      {
       winner.set({ 'winner' : true});
       winner.save();
      }
  }

});
