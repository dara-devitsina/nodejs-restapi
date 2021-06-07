const pool = require('../../db');
const queries = require('./queries');

const getEmployees = (req, res) => {
	pool.query(queries.getEmployees, (error, results) => {
		if (error) throw error;
		res.status(200).json(results.rows);
	})
};

const getEmployeeById = (req, res) => {
	const id = parseInt(req.params.id);

	pool.query(queries.getEmployeeById, [id], (error, results) => {
		if (error) throw error;
		// if results.row array is empty that means no employee found
		const noEmployeeFound = !results.rows.length;
		if (noEmployeeFound) {
			res.send('Employee does not exists in the database');
		}
		else {
			res.status(200).json(results.rows);
		}
	})
};

const addEmployee = (req, res) => {
	const { dept_id, first_name, last_name } = req.body;
	// add employee to db
	pool.query(queries.addEmployee, [dept_id, first_name, last_name], (error, results) => {
		if (error) throw error;
		res.status(201).send('Employee created successfully');
	})
};

const removeEmployee = (req, res) => {
	const id = parseInt(req.params.id);
	pool.query(queries.getEmployeeById, [id], (error, results) => {
		// if results.row array is empty that means no employee found
		const noEmployeeFound = !results.rows.length;
		if (noEmployeeFound) {
			res.send('Employee does not exists in the database');
		} 
		else {
			pool.query(queries.removeEmployee, [id], (error, results) => {
				if (error) throw error;
				res.status(200).send('Employee removed successfully');
			})
		}
	});
};

// update or remove employee's department
const updateEmployeeDept = (req, res) => {
	const id = parseInt(req.params.id);
	const { dept_id } = req.body;

	pool.query(queries.getEmployeeById, [id], (error, results) => {
		const noEmployeeFound = !results.rows.length;
		if (noEmployeeFound) {
			res.send('Employee does not exists in the database');
		} else {
			pool.query(queries.updateEmployeeDept, [dept_id, id], (error, results) => {
				if (error) throw error;
				res.status(200).send('Employee department updated successfully');
			})
		}
	})
};

module.exports = {
	getEmployees,
	getEmployeeById,
	addEmployee,
	removeEmployee,
	updateEmployeeDept,
};
