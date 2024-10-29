-- table with restaurant name and manu title
-- only includes restaurant if it has a menu
SELECT
    restaurants.name AS name,
    menus.title AS title
FROM 
    restaurants
INNER JOIN 
    menus ON restaurants.id = menus.restaurant_id;
