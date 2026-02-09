const router = require('express').Router();
const ctrl = require('../controllers/employeeController');

router.post('/', ctrl.addEmployee);

router.get('/', ctrl.getEmployees);
router.delete('/:id', ctrl.deleteEmployee);

module.exports = router;
