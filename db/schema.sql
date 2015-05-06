DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS dishes;

CREATE TABLE categories (
  id INTEGER PRIMARY KEY,
  name TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE dishes (
  id INTEGER PRIMARY KEY,
  name TEXT,
  image_url TEXT,
  price INTEGER,
  category_id INTEGER,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


CREATE TRIGGER cat_trig BEFORE UPDATE ON categories BEGIN
  UPDATE categories SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;
END;

CREATE TRIGGER dish_trig BEFORE UPDATE ON dishes BEGIN
  UPDATE dishes SET updated_at = CURRENT_TIMESTAMP WHERE id = new.id;
END;

CREATE TRIGGER rem_cat_trig 
  AFTER DELETE ON categories 
  for each row begin 
  update dishes set category_id = (select max(id) from categories) where category_id = OLD.id;
  end;
