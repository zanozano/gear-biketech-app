SELECT products.product_id,
    products.product_name,
    stocks.quantity
FROM stores
    INNER JOIN stocks ON stores.store_id = stocks.store_id
    INNER JOIN products ON stocks.product_id = products.product_id
WHERE stores.store_id = 1
    AND products.category_id = 5
ORDER BY products.product_name ASC;