import React, { useEffect, useState } from 'react';
import API from '../api/axios';
import { Link } from 'react-router-dom';


export default function EmployeesList() {
const [employees, setEmployees] = useState([]);


const fetchEmployees = async () => {
try {
const res = await API.get('/emp/employees');
setEmployees(res.data);
} catch (err) {
console.error(err);
}
};


useEffect(() => {
fetchEmployees();
}, []);


const handleDelete = async (eid) => {
  try {
    await API.delete(`/emp/employees?eid=${eid}`); 
    setEmployees(prev => prev.filter(emp => emp.employee_id !== eid));
  } catch (err) {
    console.error(err);
    alert(err.response?.data?.message || 'Delete failed');
  }
};



return (
<div className="container">
<h2>Employee List</h2>
<Link to="/add-employee">Add Employee</Link>
<table>
<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Position</th>
<th>Department</th>
<th>Salary</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
{employees.map(emp => (
<tr key={emp.employee_id}>
<td>{emp.employee_id}</td>
<td>{emp.first_name} {emp.last_name}</td>
<td>{emp.email}</td>
<td>{emp.position}</td>
<td>{emp.department}</td>
<td>{emp.salary}</td>
<td>
<Link to={`/employee/${emp.employee_id}`}>View</Link> |
<Link to={`/edit-employee/${emp.employee_id}`}>Edit</Link> |
<button className="danger" onClick={() => handleDelete(emp.employee_id)}>Delete</button>
</td>
</tr>
))}
</tbody>
</table>
</div>
);
}