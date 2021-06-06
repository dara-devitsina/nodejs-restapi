const pool = require('../../db');
const queries = require('./queries');

const getDepartments = (req, res) => {
	pool.query(queries.getDepartments, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	})
};

const getDepartmentById = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getDepartmentById, [id], (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	});
};

module.exports = {
	getDepartments,
	getDepartmentById,
};