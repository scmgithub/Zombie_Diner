$(document).ready(function() {

	var DishView = Backbone.View.extend( {
		tagName: 'li',
		template: _.template($('#showDish').html()),
		initialize: function() {
//			this.listenToOnce(categories, 'sync', this.render.bind(this));
this.listenTo(categories, "sync remove", this.render.bind(this));
			// this.listenTo(this.model, 'change', this.render.bind(this));
		},
		events: {
			"click button.deleteButton": "deleteDish",
			"click button.editButton": "editDish",
			"click button.updateButton": "updateDish"
		},

		updateDish: function() {
			var newName=this.$("#newName"+this.model.id).val();
			var newPrice=this.$("#newPrice"+this.model.id).val();
			var newImageUrl=this.$("#newImageUrl"+this.model.id).val();
			var newCategory=this.$("#newCategory"+this.model.id).val();

			this.model.set({name: newName, price: newPrice, image_url: newImageUrl, category_id: newCategory});

			this.model.save();
		},

		editDish: function() {
			this.$("span.dish").hide();
			this.$("span.editForm").show();
		},

		deleteDish: function() {
			this.model.destroy();
		},

		render: function() {
			console.log('render dish');
			this.$el.html(this.template({dish: this.model.toJSON(), categories: categories}));
			return this;
		}
	});

	var DishesView=Backbone.View.extend( {
		el: "ul#dishes-list",
		initialize: function() {
			this.listenTo(this.collection,"sync remove", this.render);
this.listenTo(categories, "sync remove", this.render);
		},
		render: function() {
			var dishes = this.$el;
			dishes.html("");
			this.collection.each(function (dish) {
				dishes.append(new DishView({model: dish}).render().$el);
			});
			return this;
		}
	});

	var CreateDishView = Backbone.View.extend( {
		el: "#addDishForm",
		events: {"click button#add-new-dish": "createDish"},
		template: _.template($("#add-dish-template").html()),
		initialize: function() {
			this.listenTo(this.collection,"sync remove", this.render);
			this.listenTo(categories, "sync remove", this.render);
		},

		createDish: function() {
			var nameField = this.$("#new-dish-name");
			var priceField = this.$("#new-dish-price");
			var imageUrlField = this.$("#new-dish-url");
			var categoryField = this.$("#category-selector");
			var name = nameField.val();
			var price = priceField.val();
			var imageUrl = imageUrlField.val();
			if (!imageUrl) {
				imageUrl= "http://fc02.deviantart.net/fs71/i/2010/152/2/3/donald_zombie_by_guiadonald.jpg";
			}
			var category_id = categoryField.val();
			this.collection.create({name: name, price: price, image_url:imageUrl, category_id: category_id});

			nameField.val("");
			priceField.val("");
			imageUrlField.val("");
			categoryField.val("");
		},
		render: function() {
			var cats = new CategoryCollection();
			var view = this;
			cats.fetch({ 
				success: function(collection, response) {
				view.$el.html(view.template({categories: collection}));
				return this;
			}});
		}
	});

	var CategoryView = Backbone.View.extend( {
		tagName: 'li',
		template: _.template($('#showCategory').html()),
		events: {
			"click button.deleteCategoryButton": "deleteCategory",
			"click button.editCategoryButton": "editCategory",
			"click button.updateCategoryButton": "updateCategory"
		},

		updateCategory: function() {
			var newName=this.$("#newCategory"+this.model.id).val();

			this.model.set({name: newName});
			this.model.save();
		},

		editCategory: function() {
			this.$("span.category").hide();
			this.$("span.editCategoryForm").show();
		},

		deleteCategory: function() {
			this.model.destroy();
		},

		render: function() {
			this.$el.html(this.template({category: this.model.toJSON()}));
			return this;
		}
	});

	var CategoriesView=Backbone.View.extend( {
		el: "ul#category-list",
		initialize: function() {
			this.listenTo(this.collection,"sync remove", this.render);
		},
		render: function() {
			var categories = this.$el;
			categories.html("");
			this.collection.each(function (category) {
				categories.append(new CategoryView({model: category}).render().$el);
			});
			return this;
		}
	});

	var CreateCategoryView = Backbone.View.extend( {
		initialize: function() {
			this.render();
		}, 
		el: "#addCategoryForm",
		events: {"click button#add-new-category": "createCategory"},

		createCategory: function() {
			var nameField = this.$("#new-category-name");
			var name = nameField.val();
			this.collection.create({name: name});
			nameField.val("");
		}
	});

	var CategorySelectorView = Backbone.View.extend( {
		el: "#category-selector",
		initialize: function() {
			this.listenTo(this.collection, "sync remove", this.render);
		},
		render: function() {

			return this;
		}
	})

	new DishesView({collection: dishes});
	new CreateDishView({collection: dishes});
//		, category_collection: categories});
	new CategoriesView({collection: categories});
	new CreateCategoryView({collection: categories});

});