const getDepartments = 'SELECT * FROM departments';
const getDepartmentById = 'SELECT * FROM departments WHERE id = $1';
const getEmployeeById = 'SELECT * FROM employees WHERE id = $1';
const checkDeptExists = 'SELECT d FROM departments d WHERE d.dept_name = $1';
const checkDeptHasEmployees = 'SELECT e FROM employees e WHERE e.dept_id = $1';
const addDepartment = 'INSERT INTO departments (dept_name) VALUES ($1)';
const removeDepartment = 'DELETE FROM departments WHERE id = $1';
const updateDepartment = 'UPDATE departments SET dept_name = $1 WHERE id = $2';
const updateEmployeeDept = 'UPDATE employees SET dept_id = $1 WHERE id = $2';

module.exports = {
	getDepartments,
	getDepartmentById,
	getEmployeeById,
	checkDeptExists,
	checkDeptHasEmployees,
	addDepartment,
	removeDepartment,
	updateDepartment,
	updateEmployeeDept
};