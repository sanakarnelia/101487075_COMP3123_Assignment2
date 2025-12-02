export const employees = [];


export const getEmployees = (req, res) => {
  res.status(200).json(employees);
};

export const createEmployee = (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      position,
      salary,
      date_of_joining,
      department,
    } = req.body;

    if (!first_name || !last_name || !email || !position || !salary || !department) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const newEmployee = {
      employee_id: employees.length + 1,
      first_name,
      last_name,
      email,
      position,
      salary,
      date_of_joining: date_of_joining || new Date(),
      department,
    };

    employees.push(newEmployee);

    res.status(201).json({
      message: "Employee created successfully.",
      employee_id: newEmployee.employee_id,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getEmployeeById = (req, res) => {
  const { eid } = req.params;
  const employee = employees.find((e) => e.employee_id == eid);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found." });
  }

  res.status(200).json(employee);
};


export const updateEmployee = (req, res) => {
  const { eid } = req.params;
  const employee = employees.find((e) => e.employee_id == eid);

  if (!employee) {
    return res.status(404).json({ message: "Employee not found." });
  }

  const { first_name, last_name, email, position, salary, date_of_joining, department } =
    req.body;


  if (first_name) employee.first_name = first_name;
  if (last_name) employee.last_name = last_name;
  if (email) employee.email = email;
  if (position) employee.position = position;
  if (salary) employee.salary = salary;
  if (date_of_joining) employee.date_of_joining = date_of_joining;
  if (department) employee.department = department;

  employee.updated_at = new Date();

  res.status(200).json({ message: "Employee details updated successfully." });
};


export const deleteEmployee = (req, res) => {
  const { eid } = req.query;

  const index = employees.findIndex((e) => e.employee_id == eid);

  if (index === -1) {
    return res.status(404).json({ message: "Employee not found." });
  }

  employees.splice(index, 1);
  res.status(200).json({ message: "Employee deleted successfully." });
};