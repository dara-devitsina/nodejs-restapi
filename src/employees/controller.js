const pool = require('../../db');
const queries = require('./queries');

const getEmployees = async (req, res) => {
	try {
		const results = await pool.query(queries.getEmployees)
		res.status(200).json(results.rows);
	} catch (error) {
		throw error;
	}
};

const getEmployeeById = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const results = await pool.query(queries.getEmployeeById, [id])
		// if results.row array is empty that means no employee found
		const noEmployeeFound = !results.rows.length;
			if (noEmployeeFound) {
				res.send('Employee does not exist in the database');
			}
			else {
				res.status(200).json(results.rows);
			}
	} catch (error) {
		throw error;
	}
};

const addEmployee = async (req, res) => {
	try {
		const { dept_id, first_name, last_name } = req.body;
		await pool.query(queries.addEmployee, [dept_id, first_name, last_name]);
		res.status(201).send('Employee created successfully');
	} catch (error) {
		throw error;
	}
};

const removeEmployee = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const employee = await pool.query(queries.getEmployeeById, [id]);
		const noEmployeeFound = !employee.rows.length;
		if (noEmployeeFound) {
			res.send('Employee does not exist in the database');
		} else {
			await pool.query(queries.removeEmployee, [id]);
			res.status(200).send('Employee removed successfully');
		}
	} catch (error) {
		throw error;
	}
};

// update or remove employee's department
const updateEmployeeDept = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const { dept_id } = req.body;
		const employee = await pool.query(queries.getEmployeeById, [id]);
		const noEmployeeFound = !employee.rows.length;
		if (noEmployeeFound) {
			res.send('Employee does not exist in the database');
		} else {
			await pool.query(queries.updateEmployeeDept, [dept_id, id]);
			res.status(200).send(`Employee's department updated successfully`);
		}
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getEmployees,
	getEmployeeById,
	addEmployee,
	removeEmployee,
	updateEmployeeDept,
};
