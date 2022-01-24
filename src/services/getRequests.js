// dependencies
const { pool } = require('../database/config');

// getStores
async function getStores() {
    try {
        const result = await pool.query(`SELECT * FROM stores ORDER BY store_name ASC`);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// getCategories
async function getCategories() {
    try {
        const result = await pool.query(`SELECT * FROM categories ORDER BY category_name ASC`);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// getBrands
async function getBrands() {
    try {
        const result = await pool.query(`SELECT * FROM brands ORDER BY brand_name ASC`);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// getCustomers
async function getCustomers() {
    try {
        const result = await pool.query(`SELECT * FROM customers`);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// getOrders
async function getOrders() {
    try {
        const result = await pool.query(`SELECT * FROM orders`);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// getProducts
async function getProducts() {
    try {
        const result = await pool.query(`SELECT * FROM products`);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// getStaffs
async function getStaffs() {
    try {
        const result = await pool.query(`SELECT * FROM staffs`);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// getStotcks
async function getStotcks() {
    try {
        const result = await pool.query(`SELECT * FROM stocks`);
        return result.rows;
    } catch (e) {
        console.log(e);
    }
}

// export
module.exports = {
    getStores,
    getCategories,
    getBrands,
    getCustomers,
    getOrders,
    getProducts,
    getStaffs,
    getStotcks
};