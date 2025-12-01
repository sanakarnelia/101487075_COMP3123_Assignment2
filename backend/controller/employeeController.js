
import Employee from "../model/employee.js"

//view all
export const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

//create
export const createEmployee = async (req, res) => {
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
      return res.status(400).json({
        message: "All fields are required! Please enter all information.",
      });
    }

    const newEmployee = new Employee({
      first_name,
      last_name,
      email,
      position,
      salary,
      date_of_joining,
      department,
    });

    await newEmployee.save();

    res.status(201).json({
      message: "Employee was created",
      employee_id: newEmployee._id,
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

//view by specific id
export const getEmployeeById = async (req, res) => {
  try {
    const { eid } = req.params;
    const employee = await Employee.findById(eid);

    if (!employee) {
      return res.status(404).json({ message: "no matching employee is found" });
    }

    res.status(200).json(employee);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Update employee by ID
export const updateEmployee = async (req, res) => {
  try {
    const { eid } = req.params;

    const updatedEmployee = await Employee.findByIdAndUpdate(
      eid,
      { ...req.body, updated_at: new Date() },
      { new: true }
    );

    if (!updatedEmployee) {
      return res.status(404).json({ message: "no matching employee is found" });
    }

    res.status(200).json({ message: "Employee details updated successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

// Delete employee by ID
export const deleteEmployee = async (req, res) => {
  try {
    const { eid } = req.query;

    const deletedEmployee = await Employee.findByIdAndDelete(eid);

    if (!deletedEmployee) {
      return res.status(404).json({ message: "Employee not found" });
    }

    res.status(200).json({ message: "Employee deleted successfully." });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message});
}
};



