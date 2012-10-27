App.Views.Entry = Backbone.View.extend({
  template: _.template($('#entry').html()),
  tagName: 'tr',
  initialize: function() {
    this.model.on('change', this.render, this);
  },
  render: function() {
    $(this.el).html(this.template({'entry' : this.model}));
    return this;
  }
});
