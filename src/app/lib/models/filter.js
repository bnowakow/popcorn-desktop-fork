(function (App) {
	'use strict';

	var Filter = Backbone.Model.extend({
		defaults: {
			genres: [],
			sorters: [],
			types: [],
			ratings: [],
			order: -1
		},

		initialize: function () {
			this.set('sorter', this.get('sorter') || this.get('sorters')[0]);
			this.set('genre', this.get('genre') || this.get('genres')[0]);
			this.set('type', this.get('type') || this.get('types')[0]);
			this.set('rating', this.get('rating') || this.get('ratings')[0]);
			this.set('order', this.get('order') || -1);
		}
	});

	App.Model.Filter = Filter;
})(window.App);
