const Pool = require('pg').Pool;

const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'company',
	password: 'darka',
	port: 5432,
});

nodule.exports = pool;