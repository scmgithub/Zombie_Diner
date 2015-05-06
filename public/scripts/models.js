var Dish = Backbone.Model.extend({
	initialize: function() {
		console.log("Dish created");
		this.on('change:category_id', function() {
			this.attributes.category = categories.get(this.attributes.category_id).toJSON();
            console.log("Dish category changed");
        });

        this.attributes.category = categories.get(this.attributes.category_id).toJSON();
	},
	defaults: {
        name: "Chow",
        image_url: "http://fc02.deviantart.net/fs71/i/2010/152/2/3/donald_zombie_by_guiadonald.jpg",
        price: 1
    },
    speak: function(){
        console.log("Brrrraaaaaaaiiiiiiinnnnnnsnnnssssss!!");
    }
});

var Category = Backbone.Model.extend({
	initialize: function() {
		console.log("Category created");
	}
});
