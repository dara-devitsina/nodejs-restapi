const getEmployees = 'SELECT * FROM employees';
const getEmployeeById = 'SELECT * FROM employees WHERE id = $1';
const checkEmployeeExists = 'SELECT e FROM employees e WHERE e.last_name = $1';
const checkDeptExists = 'SELECT d FROM departments d WHERE d.id = $1';
const addEmployee = 'INSERT INTO employees (dept_id, first_name, last_name) VALUES ($1, $2, $3)';
const removeEmployee = 'DELETE FROM employees WHERE id = $1';
const updateEmployeeDept = 'UPDATE employees SET dept_id = $1 WHERE id = $2';

module.exports = {
	getEmployees,
	getEmployeeById,
	checkEmployeeExists,
	checkDeptExists,
	addEmployee,
	removeEmployee,
	updateEmployeeDept,
};