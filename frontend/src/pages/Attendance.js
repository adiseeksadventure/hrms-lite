import React, { useState } from 'react';
import { markAttendance, getAttendance } from '../services/api';

const Attendance = () => {
  const [empId, setEmpId] = useState('');
  const [list, setList] = useState([]);
  const [status, setStatus] = useState('Present');
  const [date, setDate] = useState('');

  const submit = async () => {
    await markAttendance({
      employeeId: empId,
      date,
      status
    });
    alert('Attendance Marked');
  };

  const load = async () => {
    if (!empId) {
      alert("Enter Employee ID first");
      return;
    }
  
    try {
      const res = await getAttendance(empId);
      setList(res.data);
    } catch (err) {
      console.log("No records or invalid ID");
      setList([]);
    }
  };
  

  return (
    <div className="container">
      <h2>Attendance</h2>
  
      <input
        placeholder="Employee ID"
        value={empId}
        onChange={e => setEmpId(e.target.value)}
      />
  
      <input
        type="date"
        value={date}
        onChange={e => setDate(e.target.value)}
      />
  
      <select value={status} onChange={e => setStatus(e.target.value)}>
        <option>Present</option>
        <option>Absent</option>
      </select>
  
      <button onClick={submit}>Mark Attendance</button>
      <button onClick={load}>View Records</button>
  
      <hr />
  
      {list.length === 0 && <p>No records found</p>}
  
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
  
        <tbody>
          {list.map((a, i) => (
            <tr key={i}>
              <td>{a.date}</td>
              <td>{a.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
};

export default Attendance;

