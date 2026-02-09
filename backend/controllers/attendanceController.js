const Attendance = require('../models/Attendance');

exports.markAttendance = async (req, res) => {
  const { employeeId, date, status } = req.body;

  if (!employeeId || !date || !status) {
    return res.status(400).json({ message: "All fields required" });
  }

  const record = new Attendance(req.body);
  await record.save();

  res.status(201).json(record);
};

exports.getAttendanceByEmployee = async (req, res) => {
  const data = await Attendance.find({ employeeId: req.params.employeeId });
  res.json(data);
};
