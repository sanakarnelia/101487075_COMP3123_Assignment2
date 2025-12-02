import express from "express";
import { getEmployees, createEmployee,  getEmployeeById,
  updateEmployee,
  deleteEmployee, } from "../controller/employeeController.js";

const router = express.Router();

router.get("/employees", getEmployees);

router.post("/employees", createEmployee);

router.get("/employees/:eid", getEmployeeById);

router.put("/employees/:eid", updateEmployee);

router.delete("/employees", deleteEmployee);
export default router;