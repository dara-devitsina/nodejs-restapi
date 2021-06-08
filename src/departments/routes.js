const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getDepartments);
router.post('/', controller.addDepartment);
router.get('/:id', controller.getDepartmentById);
router.put('/:id', controller.updateDepartment);
router.put('/employees/:id', controller.updateEmployeeDept);
router.delete('/:id', controller.removeDepartment);
router.delete('/employees/:id', controller.removeEmployeeFromDept);

module.exports = router;