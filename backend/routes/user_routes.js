
import express from "express";
import { signup,login } from "../controller/userController.js";  

const routes = express.Router();

routes.post("/signup", signup);
routes.post("/login", login);

export default routes;