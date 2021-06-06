const pool = require('../../db');

const getDepartments = (req, res) => {
	pool.query('SELECT * FROM departments', (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	})
}

module.exports = {
	getDepartments,
};