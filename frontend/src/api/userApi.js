import API from "./axios";

export const signupUser = async (user) => {
  const res = await API.post("/user/signup", user);
  return res.data;
};

export const loginUser = async (user) => {
  const res = await API.post("/user/login", user);
  return res.data;
};