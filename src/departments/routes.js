const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getDepartments);
router.post('/', controller.addDepartment);
router.get('/:id', controller.getDepartmentById);
router.put('/:id', controller.updateDepartment);
router.delete('/:id', controller.removeDepartment);

module.exports = router;