const getDepartments = 'SELECT * FROM departments';
const getDepartmentById = 'SELECT * FROM departments WHERE id = $1';

module.exports = {
	getDepartments,
	getDepartmentById,
};