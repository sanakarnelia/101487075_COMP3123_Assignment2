import React, { useState, useEffect } from 'react';
import API from '../api/axios';
import { useNavigate, useParams } from 'react-router-dom';


export default function EmployeeForm() {
const { eid } = useParams();
const navigate = useNavigate();


const [first_name, setFirstName] = useState('');
const [last_name, setLastName] = useState('');
const [email, setEmail] = useState('');
const [position, setPosition] = useState('');
const [department, setDepartment] = useState('');
const [salary, setSalary] = useState('');
const [date_of_joining, setDateOfJoining] = useState('');


useEffect(() => {
if (eid) {
API.get(`/emp/employees/${eid}`)
.then(res => {
const emp = res.data;
setFirstName(emp.first_name);
setLastName(emp.last_name);
setEmail(emp.email);
setPosition(emp.position);
setDepartment(emp.department);
setSalary(emp.salary);
setDateOfJoining(emp.date_of_joining);
})
.catch(err => console.error(err));
}
}, [eid]);


const handleSubmit = async (e) => {
e.preventDefault();
const payload = { first_name, last_name, email, position, department, salary, date_of_joining };


try {
if (eid) {
await API.put(`/emp/employees/${eid}`, payload);
alert('Employee updated successfully');
} else {
await API.post('/emp/employees', payload);
alert('Employee created successfully');
}
navigate('/employees');
} catch (err) {
console.error(err);
alert(err.response?.data?.message || 'Failed to save employee');
}
};


return (
<div className="centered-card">
  <h2>{eid ? 'Edit' : 'Add'} Employee</h2>
  <form onSubmit={handleSubmit}>
    <input
      value={first_name}
      onChange={e => setFirstName(e.target.value)}
      placeholder="First Name (e.g., John)"
      required
    />
    <input
      value={last_name}
      onChange={e => setLastName(e.target.value)}
      placeholder="Last Name (e.g., Doe)"
      required
    />
    <input
      type="email"
      value={email}
      onChange={e => setEmail(e.target.value)}
      placeholder="Email (e.g., john.doe@gmail.com)"
      required
    />
    <input
      value={position}
      onChange={e => setPosition(e.target.value)}
      placeholder="Position (e.g., Manager)"
      required
    />
    <input
      value={department}
      onChange={e => setDepartment(e.target.value)}
      placeholder="Department (e.g., HR)"
      required
    />
    <input
      value={salary}
      onChange={e => setSalary(e.target.value)}
      placeholder="Salary (e.g., 50000)"
      required
    />
    <input
      type="date"
      value={date_of_joining}
      onChange={e => setDateOfJoining(e.target.value)}
      placeholder="Date of Joining"
    />
    <button type="submit">{eid ? 'Update' : 'Add'} Employee</button>
  </form>
</div>
)
}