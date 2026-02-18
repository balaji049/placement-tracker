import Application from "../models/Application.js";

// GET all
export const getApplications = async (req, res) => {
  const apps = await Application.find().sort({ createdAt: -1 });
  res.json(apps);
};

// POST new
export const createApplication = async (req, res) => {
  const app = await Application.create(req.body);
  res.status(201).json(app);
};

// PUT update
export const updateApplication = async (req, res) => {
  const updated = await Application.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// DELETE
export const deleteApplication = async (req, res) => {
  await Application.findByIdAndDelete(req.params.id);
  res.json({ message: "Application deleted" });
};
