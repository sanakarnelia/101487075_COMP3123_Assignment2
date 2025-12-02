import React, { useEffect, useState } from 'react';
import API from '../api/axios';
import { useParams, Link } from 'react-router-dom';


export default function EmployeeDetails() {
const { eid } = useParams();
const [emp, setEmp] = useState(null);


useEffect(() => {
API.get(`/emp/employees/${eid}`)
.then(res => setEmp(res.data))
.catch(err => console.error(err));
}, [eid]);


if (!emp) return <p>Loading...</p>;


return (
<div className="centered-card">
<h2>Employee Details</h2>
<div className="details-row">
<p><strong>Name:</strong> {emp.first_name} {emp.last_name}</p>
<p><strong>Email:</strong> {emp.email}</p>
<p><strong>Position:</strong> {emp.position}</p>
<p><strong>Department:</strong> {emp.department}</p>
<p><strong>Salary:</strong> {emp.salary}</p>
<p><strong>Date of Joining:</strong> {emp.date_of_joining}</p>
</div>
<Link to="/employees" className="btn">Back to List</Link>
</div>
);
}