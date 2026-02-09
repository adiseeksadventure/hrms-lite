
const router = require('express').Router();
const ctrl = require('../controllers/attendanceController');

router.post('/', ctrl.markAttendance);
router.get('/:employeeId', ctrl.getAttendanceByEmployee);

module.exports = router;
