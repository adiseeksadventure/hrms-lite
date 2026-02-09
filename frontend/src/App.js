import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import Employees from './pages/Employees';
import AddEmployee from './pages/AddEmployee';
import Attendance from './pages/Attendance';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Employees</Link> | 
        <Link to="/add"> Add Employee</Link> | 
        <Link to="/attendance"> Attendance</Link>
        <Link to="/dashboard"> Dashboard</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/add" element={<AddEmployee />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

