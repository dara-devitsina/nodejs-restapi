const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getDepartments);
router.get('/:id', controller.getDepartmentById);

module.exports = router;