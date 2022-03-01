// dependencies
const { pool } = require('../database/config');

const searchProducts = async ({ category, brand, store }) => {
	try {
		let bodyContent = `
        SELECT stores.store_name, products.product_id, products.product_name, stocks.quantity
        FROM products 
        INNER JOIN stocks ON products.product_id = stocks.product_id
        INNER JOIN stores ON stocks.store_id = stores.store_id 
        WHERE products.product_name IS NOT NULL
    `;
		// combo boxes
		if (category) bodyContent += ` AND products.category_id = ${category}`;
		if (brand) bodyContent += ` AND products.brand_id = ${brand}`;
		if (store) bodyContent += ` AND stores.store_id = ${store}`;

		const result = await pool.query(bodyContent);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
};

module.exports = { searchProducts };
