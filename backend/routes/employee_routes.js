
import express from "express";
import { getEmployees, createEmployee, updateEmployee, deleteEmployee } from "../controller/employeeController.js";

const routes = express.Router();


routes.get("/employees", getEmployees);
routes.post("/employees", createEmployee);
routes.get("/employees/:eid", getEmployees);
routes.put("/employees/:eid", updateEmployee);
routes.delete("/employees", deleteEmployee);



export default routes;