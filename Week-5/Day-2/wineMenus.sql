-- selecting only wine menus, with INNER JOIN of name and price
SELECT
    menus.title AS title,
    menuItems.name AS name,
    menuItems.price AS price
FROM
    menus
INNER JOIN
    menuItems ON menus.id = menuItems.menu_id
WHERE
    menus.title = "Wines";