import express from "express";
import cors from "cors";
import userRoutes from "./routes/user_routes.js";
import employeeRoutes from "./routes/employee_routes.js";

const app = express();
const PORT = 5000;


app.use(cors());
app.use(express.json());
app.use("/api/v1/user", userRoutes);
app.use("/api/v1/emp", employeeRoutes);

app.get("/", (req, res) => res.send("Server running"));
app.listen(5000, () => console.log('Backend running on port 5000'));