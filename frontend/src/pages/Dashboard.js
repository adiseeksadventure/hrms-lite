import React, { useEffect, useState } from 'react';
import { getEmployees } from '../services/api';

const Dashboard = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    getEmployees().then(res => setCount(res.data.length));
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <h3>Total Employees: {count}</h3>
    </div>
  );
};

export default Dashboard;
