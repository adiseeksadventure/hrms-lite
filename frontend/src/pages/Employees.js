import React, { useEffect, useState } from 'react';
import { getEmployees, deleteEmployee } from '../services/api';

const Employees = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);

  const load = async () => {
    const res = await getEmployees();
    setList(res.data);
    setLoading(false);
  };

  useEffect(() => {
    load();
  }, []);

  const remove = async (id) => {
    await deleteEmployee(id);
    load();
  };

  if (loading) return <h3>Loading...</h3>;

  return (
    <div className="container">
      <h2>Employees</h2>

      {list.length === 0 && <p>No employees found</p>}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {list.map(e => (
            <tr key={e._id}>
              <td>{e.fullName}</td>
              <td>{e.email}</td>
              <td>{e.department}</td>
              <td>
                <button onClick={() => remove(e._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Employees;

