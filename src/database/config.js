const { Pool } = require('pg');

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	port: 5433,
	password: '123456',
	database: 'gear-biketech',
});

module.exports = { pool };
