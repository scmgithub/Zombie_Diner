var DishCollection = Backbone.Collection.extend({
	model: Dish,
	url: '/dishes'
});

var dishes = new DishCollection();
dishes.fetch();

var CategoryCollection = Backbone.Collection.extend({
	model: Category,
	url: '/categories'
});

var categories = new CategoryCollection();
categories.fetch();
