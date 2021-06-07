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
		// if results.row array is empty that means no department found
		const noDeptFound = !results.rows.length;
		if (noDeptFound) {
			res.send('Depatment does not exists in the database');
		}
		else {
			res.status(200).json(results.rows);
		}
	})
};

const addDepartment = (req, res) => {
	const { dept_name } = req.body;
	// check if department already exists
	pool.query(queries.checkDeptExists, [dept_name], (error, results) => {
		if (results.rows.length) {
			res.send('Department exists');
		}
		// add department to db
		pool.query(queries.addDepartment, [dept_name], (error, results) => {
			if (error) throw error;
			res.status(201).send('Department created successfully');
		})
	})
};

const removeDepartment = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getDepartmentById, [id], (error, results) => {
		// if results.row array is empty that means no department found
		const noDeptFound = !results.rows.length;
		if (noDeptFound) {
			res.send('Depatment does not exists in the database');
		}
		else {
			pool.query(queries.checkDeptHasEmployees, [id], (error, results) => {
				const employeesFound = results.rows.length;
				if (employeesFound) {
					res.send('Depatment has employees, could not delete');
				} else {
					pool.query(queries.removeDepartment, [id], (error, results) => {
						if (error) throw error;
						res.status(200).send('Department removed successfully');
					})
				}
		})
		}
	})
};

const updateDepartment = (req, res) => {
	const id = parseInt(req.params.id);
	const { dept_name } = req.body;

	pool.query(queries.getDepartmentById, [id], (error, results) => {
		const noDeptFound = !results.rows.length;
		if (noDeptFound) {
			res.send('Depatment does not exists in the database');
		} else {
			pool.query(queries.updateDepartment, [dept_name, id], (error, results) => {
				if (error) throw error;
				res.status(200).send('Department updated successfully');
			})
		}
	})
};

module.exports = {
	getDepartments,
	getDepartmentById,
	addDepartment,
	removeDepartment,
	updateDepartment,
};