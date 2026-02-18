import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import DashboardLayout from "../components/layout/DashboardLayout";
import StatusBadge from "../components/common/StatusBadge";
import Card from "../components/common/Card";
import InterviewTimeline from "../components/interviews/InterviewTimeline";
import Modal from "../components/common/Modal";
import ApplicationForm from "../components/applications/ApplicationForm";

import { useAppContext } from "../context/AppContext";

export default function ApplicationDetails() {
  const { id } = useParams(); // MongoDB _id
  const navigate = useNavigate();

  const {
    apps,
    loading,
    updateApp,   // ✅ correct name
    deleteApp,   // ✅ correct name
  } = useAppContext();

  const [isEditOpen, setIsEditOpen] = useState(false);

  /* ⏳ Loading */
  if (loading) {
    return (
      <DashboardLayout>
        <p>Loading application...</p>
      </DashboardLayout>
    );
  }

  /* 🔍 Find application by _id */
  const application = apps.find((app) => app._id === id);

  if (!application) {
    return (
      <DashboardLayout>
        <p>Application not found</p>
      </DashboardLayout>
    );
  }

  /* ✏️ Update */
  async function handleUpdate(updatedData) {
    await updateApp({ ...application, ...updatedData });
    setIsEditOpen(false);
  }

  /* 🗑️ Delete */
  async function handleDelete() {
    if (!window.confirm("Delete this application?")) return;
    await deleteApp(application._id);
    navigate("/");
  }

  return (
    <DashboardLayout>
      {/* 🔙 Back */}
      <button
        onClick={() => navigate("/")}
        style={{
          marginBottom: "16px",
          background: "none",
          border: "none",
          color: "var(--primary)",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        ← Back to Dashboard
      </button>

      {/* HEADER + ACTIONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "24px",
        }}
      >
        <div>
          <h1>{application.company}</h1>
          <p style={{ color: "var(--text-secondary)" }}>
            {application.role}
          </p>
        </div>

        <div style={{ display: "flex", gap: "10px" }}>
          <button
            onClick={() => setIsEditOpen(true)}
            style={{
              background: "var(--primary)",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            ✏️ Edit
          </button>

          <button
            onClick={handleDelete}
            style={{
              background: "var(--danger)",
              color: "#fff",
              padding: "8px 14px",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
            }}
          >
            🗑️ Delete
          </button>
        </div>
      </div>

      {/* OVERVIEW */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "20px",
          marginBottom: "30px",
        }}
      >
        <Card>
          <p>Status</p>
          <StatusBadge status={application.status} />
        </Card>

        <Card>
          <p>Applied Date</p>
          <strong>{application.appliedDate}</strong>
        </Card>

        <Card>
          <p>Stipend / Salary</p>
          <strong>{application.stipend}</strong>
        </Card>
      </div>

      {/* INTERVIEWS */}

      {application.interviews?.length === 0 ? (
  <p style={{ color: "var(--text-secondary)" }}>
    No interviews scheduled yet.
  </p>
) : (
  <InterviewTimeline interviews={application.interviews} />
)}

      <h2 style={{ margin: "30px 0 12px" }}>Interview Rounds</h2>
      <InterviewTimeline interviews={application.interviews || []} />

      <hr style={{ margin: "30px 0", borderColor: "#e5e7eb" }} />

      {/* NOTES */}
      <Card>
        <h3>Notes</h3>
        <p>{application.notes || "No notes added yet."}</p>
      </Card>

      {/* ✏️ EDIT MODAL */}
      <Modal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)}>
        <ApplicationForm
          initialData={application}
          onSubmit={handleUpdate}
        />
      </Modal>
    </DashboardLayout>
  );
}
