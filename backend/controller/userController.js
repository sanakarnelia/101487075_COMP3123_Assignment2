
import bcrypt from "bcryptjs";
import User from "../model/user.js";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

 
     const existing_User = await User.findOne({
      $or: [{ username }, { email }],
    });
    
   if (existing_User) {
      return res.status(400).json({
        message: "User is already exists.",
      });
    }

   
    const hash_pas = await bcrypt.hash(password, 10);
  
    const newUser = new User({
      username,
      email,
      password: hash_pas,
    });

    await newUser.save();

     res.status(201).json({
      message: "User registered successfully.",
       user: {
        id: newUser._id,
        username: newUser.username,
        email: newUser.email,
        created_at: newUser.created_at,
      },

     
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
};


export const login = async (req, res) => {
  try {
    const { email, password } = req.body; 
  
    const user = await User.findOne({email });

    if (!user) {
      return res.status(404).json({ message: "User not found! plz enter correct email" });
    }

    const Match = await bcrypt.compare(password, user.password);

    if (!Match) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message});
}
};
