var DishCollection = Backbone.Collection.extend({
	model: Dish,
	url: '/dishes'
});

var CategoryCollection = Backbone.Collection.extend({
	model: Category,
	url: '/categories'
});

var categories = new CategoryCollection();
categories.fetch();

var dishes = new DishCollection();
dishes.fetch();







// Crawford "review"
// var appDish = new DishCollection;
// appDish.fetch(null, {
// 	success: function(model, response) {
// 		response.forEach(function(item) {
// 			if (item.category_id === 2) {
// 				appDish.add([item]);
// 			}
// 		})
// 	}
// });
