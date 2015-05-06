insert into categories (name) VALUES
	("(no category)"), ("Celebrity Dishes"), ("Entrees"), ("Diner Favorites"), ("Dessert"), ("Drinks");

insert into dishes (name, price, image_url, category_id) VALUES
	("Shia LaBeouf Bourguignon", 34, "images/shia.jpg", 2),
	("Larry a la King", 52, "images/larry.jpg", 2),
	("Guy Fieri Flambe", 7, "images/guy.jpg", 2),
	("Martha Stew", 46, "images/martha.jpg", 2),
	("Steve McIntosh", 1000, "images/steve.jpg", 2),

	("Chicken Fried Cerebellum", 23, "images/real_brain.jpg", 3),
	("White Brain Puree on Toast", 34, "images/Calf_Brains.jpg", 3),
	("Cerebrum & Waffles", 14, "images/homerbrain.jpg", 3),
	("Smashed Fingers with Basil Pesto", 15, "images/brain-serve.jpg", 3),
	("Sweet & Sour Glazed Eyeballs", 17, "images/zombie-head.jpg", 3),
	("Cold Sesame Intestines", 22, "images/zombie-brains-love.gif", 3),
	("Medulla Marsala", 32, "images/zombie-brain.jpg", 3),
	("Human Giblet Ragout", 22, "images/homer.jpg", 3),

	("Spanakopita", 10,"images/span.jpg", 4),
	("Liver (raw, room temperature) and onions", 17,"images/liver.jpg", 4),

	("Baked Alaskan", 23, "images/walker.gif", 5),
	("Banana Split Cranium", 14, "images/greenguy.jpg", 5),
	("Hot Blood Sundae", 7, "images/greenguy2.jpg", 5),

	("Blood-Red 'Wine'", 7, "images/blockhead.jpg", 6),
	("The Zombie (duh)", 9, "images/zombiface.png", 6);
