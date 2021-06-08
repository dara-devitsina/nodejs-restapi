const pool = require('../../db');
const queries = require('./queries');

const getDepartments = async (req, res) => {
	try {
		const results = await pool.query(queries.getDepartments)
		res.status(200).json(results.rows);
	} catch (error) {
		throw error;
	}
};

const getDepartmentById = async (req, res) => {
	const id = parseInt(req.params.id);
	try {
		const result = await pool.query(queries.getDepartmentById, [id])
		// if results.row array is empty that means no department found
		const noDeptFound = !result.rows.length;
			if (noDeptFound) {
				res.send('Depatment does not exist in the database');
			}
			else {
				res.status(200).json(result.rows);
			}
	} catch (error) {
		throw error;
	}
};

const addDepartment = async (req, res) => {
	try {
		const { dept_name } = req.body;
		// check if department already exists
		const dept = await pool.query(queries.checkDeptExists, [dept_name]);
		if (dept.rows.length) {
			res.send('Department exists');
		} else {
			// add department to db
			await pool.query(queries.addDepartment, [dept_name]);
			res.status(201).send('Department created successfully');
		}
	} catch (error) {
		throw error;
	}
};

const removeDepartment = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const dept = await pool.query(queries.getDepartmentById, [id]);
		const noDeptFound = !dept.rows.length;
		if (noDeptFound) {
			res.send('Depatment does not exist in the database');
		} else {
			// check if department has constraints for removal
			const results = await pool.query(queries.checkDeptHasEmployees, [id]);
			const employeesFound = results.rows.length;
			if (employeesFound) {
				res.send('Depatment has employees, could not delete');
			} else {
				await pool.query(queries.removeDepartment, [id]);
				res.status(200).send('Department removed successfully');
			}
		}
	} catch (error) {
		throw error;
	}
};

const updateDepartment = async (req, res) => {
	try {
		const id = parseInt(req.params.id);
		const { dept_name } = req.body;
		const dept = await pool.query(queries.getDepartmentById, [id]);
		const noDeptFound = !dept.rows.length;
		if (noDeptFound) {
			res.send('Depatment does not exist in the database');
		} else {
			await pool.query(queries.updateDepartment, [dept_name, id]);
			res.status(200).send('Department updated successfully');
		}
	} catch (error) {
		throw error;
	}
};

module.exports = {
	getDepartments,
	getDepartmentById,
	addDepartment,
	removeDepartment,
	updateDepartment,
};