App.Views.EntriesIndex = Backbone.View.extend({
  template: _.template($('#entries-index').html()),
  events: {
    'submit #new_entry' : 'createEntry',
    'click #draw': 'drawWinner'
  },
  initialize: function() {
    this.collection.on('reset', this.render, this); 
    this.collection.on('add', this.appendEntry, this);

    $('.alert .close').live("click", function(e) {
        $(this).parent().hide();
    });
  },

  render: function() {
    $(this.el).html(this.template());
    this.collection.each(function (entry){
       this.appendEntry(entry);
    },this);
    return this;
  },
  appendEntry: function(entry) {
    view = new App.Views.Entry({'model' : entry});
    $('#entries').append(view.render().el); 
  },
  drawWinner: function(e) {
    e.preventDefault();
    this.collection.drawWinner();
  },
  createEntry: function(e) {
    e.preventDefault();
    var that =this;
    this.collection.create({ 'name' : $('#new_entry_name').val() },{
       wait: true,
       succes: function( entry, response){
          $('#new_entry')[0].reset();   
       },
       error: function(entry, response){
          that.handleError(entry, response);
       }  
    });
  },
  handleError: function(entry, response){
    if (response.status == 422)
      {
       var errors = $.parseJSON(response.responseText).errors;
       _.each(errors, function(error, attribute){
          $(".alert .message").text(error);
          $(".alert").show();
       });
      }
  } 
});
