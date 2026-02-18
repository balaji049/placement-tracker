import mongoose from "mongoose";

const interviewSchema = new mongoose.Schema({
  round: String,
  date: String,
  prepared: Boolean,
  result: String,
  feedback: String,
});

const applicationSchema = new mongoose.Schema(
  {
    company: { type: String, required: true },
    role: { type: String, required: true },
    status: {
      type: String,
      enum: ["Applied", "Interview", "Offer", "Rejected"],
      default: "Applied",
    },
    appliedDate: String,
    stipend: String,
    notes: String,
    interviews: [interviewSchema],
  },
  { timestamps: true }
);

export default mongoose.model("Application", applicationSchema);
