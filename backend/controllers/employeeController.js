const Employee = require('../models/Employee');

exports.addEmployee = async (req, res) => {
  try {
    const { employeeId, fullName, email, department } = req.body;

    if (!employeeId || !fullName || !email || !department) {
      return res.status(400).json({ message: "All fields required" });
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }

    const exists = await Employee.findOne({ employeeId });
    if (exists) {
      return res.status(400).json({ message: "Employee ID already exists" });
    }

    const newEmp = new Employee(req.body);
    await newEmp.save();

    res.status(201).json(newEmp);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getEmployees = async (req, res) => {
  const data = await Employee.find();
  res.json(data);
};

exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted" });
};
