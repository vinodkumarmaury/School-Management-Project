import { Admin } from "../models/adminRegisterSchema.js";

export const adminRegister = async (req, res, next) => {
  console.log("adminRegister controller invoked");
  console.log("Request body:", req.body);
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      console.log("Missing email or password");
      return res.status(400).json({ success: false, message: "Please Fill Form!" });
    }

    // Check if the admin already exists in the database
    const existingAdmin = await Admin.findOne({ email });
    if (existingAdmin) {
      console.log("Admin already exists");
      return res.status(400).json({ success: false, message: "Admin already exists" });
    }

    console.log("Creating new admin");
    const newAdmin = new Admin({ email, password });
    await newAdmin.save();

    res.status(200).json({
      success: true,
      message: "Admin Created!",
    });
  } catch (err) {
    console.error("Error in adminRegister controller:", err);
    next(err);
  }
};
