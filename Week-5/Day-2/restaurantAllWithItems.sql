-- all restaurants
-- includes menu and menu items even if null
SELECT
    restaurants.name AS restaurantName,
    menus.title AS title,
    menuItems.name AS name
FROM 
    restaurants
LEFT JOIN
    menus ON restaurants.id = menus.restaurant_id
LEFT JOIN
    menuItems ON menus.id = menuItems.menu_id;
