-- full menu table for items under £30
SELECT
    menus.title AS title,
    menuItems.name AS name,
    menuItems.price AS price
FROM
    menus
INNER JOIN
    menuItems ON menus.id = menuItems.menu_id
WHERE
    menuItems.price < 30;