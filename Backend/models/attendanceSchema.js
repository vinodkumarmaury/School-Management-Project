// attendanceSchema.js
import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  status: {
    type: String,
    enum: ["Present", "Absent", "Absent with apology"],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("Attendance", attendanceSchema);
