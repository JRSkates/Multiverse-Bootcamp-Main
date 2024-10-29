-- selecting all restaurants with their menu titles and menu items
SELECT
    restaurants.name AS restaurantName,
    menus.title AS title,
    menuItems.name AS name
FROM 
    restaurants
INNER JOIN 
    menus ON restaurants.id = menus.restaurant_id
INNER JOIN 
    menuItems ON menus.id = menuItems.menu_id;
