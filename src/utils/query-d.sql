SELECT products.brand_id,
    brands.brand_name,
    SUM(stocks.quantity)
FROM products
    FULL OUTER JOIN stocks ON products.product_id = stocks.product_id
    FULL OUTER JOIN brands ON products.brand_id = brands.brand_id
GROUP BY brands.brand_name,
    products.brand_id
ORDER BY SUM DESC;