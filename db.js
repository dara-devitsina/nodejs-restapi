const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	password: 'darka',
	host: 'localhost',
	database: 'company',
	port: 5432,
});

module.exports = pool;