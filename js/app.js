var newDataFlag = 'data-arrived';
var Dispatcher = _.extend({}, Backbone.Events);

setInterval(function() {
    var currentTime = (new Date()).toLocaleTimeString();
    Dispatcher.trigger(newDataFlag, currentTime);
}, 1000);

var CurrentTimeView = Backbone.View.extend({
    initialize: function() {
        // bind "render" to this view with Underscore's "bindAll"
        _(this).bindAll('render');

		 // render this view when new data is broadcast 
        Dispatcher.on(newDataFlag, this.render);
    },

    render: function(currentTime) {
        // set our DOM element's text content to the clock's current time
        this.el.textContent = currentTime;
    }
});

$(function() {
    new CurrentTimeView({
        el: document.getElementById('current-time')
    });
});
