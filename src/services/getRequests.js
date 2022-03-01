// dependencies
const { pool } = require('../database/config');

// getStores
const getStores = async () => {
	try {
		const result = await pool.query(`SELECT * FROM stores ORDER BY store_name ASC`);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
};

// getCategories
const getCategories = async () => {
	try {
		const result = await pool.query(`SELECT * FROM categories ORDER BY category_name ASC`);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
};

// getBrands
const getBrands = async () => {
	try {
		const result = await pool.query(`SELECT * FROM brands ORDER BY brand_name ASC`);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
};

// getCustomers
const getCustomers = async () => {
	try {
		const result = await pool.query(`SELECT * FROM customers ORDER BY customer_name ASC`);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
};

// getOrders
const getOrders = async () => {
	try {
		const result = await pool.query(`SELECT * FROM orders ORDER BY order_id ASC`);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
};

// getProducts
const getProducts = async () => {
	try {
		const result = await pool.query(`SELECT * FROM products ORDER BY product_id ASC`);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
};

// getStaffs
const getStaffs = async () => {
	try {
		const result = await pool.query(`SELECT * FROM staffs ORDER BY staff_id ASC`);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
};

// getStotcks
const getStotcks = async () => {
	try {
		const result = await pool.query(`SELECT * FROM stocks ORDER BY product_id ASC`);
		return result.rows;
	} catch (e) {
		console.log(e);
	}
};

// export
module.exports = {
	getStores,
	getCategories,
	getBrands,
	getCustomers,
	getOrders,
	getProducts,
	getStaffs,
	getStotcks,
};
