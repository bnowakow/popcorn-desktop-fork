(function (App) {
    'use strict';

    var Filter = Backbone.Model.extend({
        defaults: {
            genres: [],
            sorters: [],
            types: [],
            order: -1,
            rating: 0
        },

        initialize: function () {
            this.set('sorter', this.get('sorter') || this.get('sorters')[0]);
            this.set('genre', this.get('genre') || this.get('genres')[0]);
            this.set('type', this.get('type') || this.get('types')[0]);
            this.set('order', this.get('order') || -1);
            this.set('rating', this.get('rating') || 0);
        }
    });

    App.Model.Filter = Filter;
})(window.App);
