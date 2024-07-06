import Attendance from "../models/attendanceSchema.js";
import {Student} from "../models/studentSchema.js"; // Import the Student model
import { handleValidationError } from "../middlewares/errorHandler.js";

// Mark attendance for individual students
export const markAttendance = async (req, res, next) => {
  const { attendanceData } = req.body;
  try {
    if (!attendanceData || !Array.isArray(attendanceData) || attendanceData.length === 0) {
      return handleValidationError("Attendance data is missing or invalid!", 400);
    }

    const attendanceRecords = await Promise.all(attendanceData.map(async (record) => {
      const { student, status } = record;
      if (!student) {
        return handleValidationError("Student ID is missing!", 400);
      }
      return await Attendance.create({ student, status });
    }));

    res.status(200).json({
      success: true,
      message: "Attendance marked successfully!",
      attendanceRecords
    });
  } catch (err) {
    next(err);
  }
};

// Mark attendance for all students
export const markAllAttendance = async (req, res, next) => {
  const { status } = req.body;
  try {
    if (!status || !['Present', 'Absent', 'Absent with apology'].includes(status)) {
      return handleValidationError("Invalid attendance status!", 400);
    }

    const students = await Student.find(); // Fetch all students
    const attendanceRecords = await Promise.all(students.map(async (student) => {
      return await Attendance.create({ student: student._id, status });
    }));

    res.status(200).json({
      success: true,
      message: "All students' attendance marked successfully!",
      attendanceRecords
    });
  } catch (err) {
    next(err);
  }
};

// Get all attendance records
export const getAllAttendance = async (req, res, next) => {
  try {
    const attendanceRecords = await Attendance.find().populate('student', 'name registrationNumber grade');
    res.status(200).json({
      success: true,
      attendanceRecords
    });
  } catch (err) {
    next(err);
  }
};
