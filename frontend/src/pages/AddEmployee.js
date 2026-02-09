import React, { useState } from 'react';
import { addEmployee } from '../services/api';

const AddEmployee = () => {
  const [form, setForm] = useState({
    employeeId: '',
    fullName: '',
    email: '',
    department: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();
    if (!form.employeeId || !form.fullName || !form.email || !form.department) {
        setMessage("All fields required");
        return;
      }      
    try {
      await addEmployee(form);
      setMessage('Employee Added Successfully');
      setForm({
        employeeId: '',
        fullName: '',
        email: '',
        department: ''
      });
    } catch (err) {
      setMessage(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div className="container">
      <h2>Add Employee</h2>

      {message && <p>{message}</p>}

      <form onSubmit={submit}>
        <input name="employeeId" placeholder="Employee ID" value={form.employeeId} onChange={handleChange} /><br/>
        <input name="fullName" placeholder="Full Name" value={form.fullName} onChange={handleChange} /><br/>
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br/>
        <input name="department" placeholder="Department" value={form.department} onChange={handleChange} /><br/>

        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddEmployee;
