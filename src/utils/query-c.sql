SELECT products.category_id,
    categories.category_name,
    COUNT(*) AS cantidad
FROM products
    FULL OUTER JOIN categories ON products.category_id = categories.category_id
GROUP BY categories.category_name,
    products.category_id
ORDER BY cantidad DESC;