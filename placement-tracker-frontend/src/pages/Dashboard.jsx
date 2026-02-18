import { useState } from "react";
import DashboardLayout from "../components/layout/DashboardLayout";
import KPICard from "../components/dashboard/KPICard";
import ApplicationTable from "../components/applications/ApplicationTable";
import StatusChart from "../components/analytics/StatusChart";
import MonthlyTrendChart from "../components/analytics/MonthlyTrendChart";
import ConversionMetrics from "../components/analytics/ConversionMetrics";
import Modal from "../components/common/Modal";
import ApplicationForm from "../components/applications/ApplicationForm";
import Skeleton from "../components/common/Skeleton";
import EmptyState from "../components/common/EmptyState";
import { useAppContext } from "../context/AppContext";

const STATUS_OPTIONS = ["All", "Applied", "Interview", "Offer", "Rejected"];

export default function Dashboard() {
  const {
    apps,
    loading,
    error,
    addApplication,
    updateApp,
  } = useAppContext();

  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApp, setEditingApp] = useState(null);

  /* =======================
     LOADING STATE
     ======================= */
  if (loading) {
    return (
      <DashboardLayout>
        <Skeleton height={32} />
        <br />
        <Skeleton height={120} />
        <br />
        <Skeleton height={120} />
      </DashboardLayout>
    );
  }

  /* =======================
     ERROR STATE
     ======================= */
  if (error) {
    return (
      <DashboardLayout>
        <p style={{ color: "red" }}>Error: {error}</p>
      </DashboardLayout>
    );
  }

  /* =======================
     EMPTY DATABASE STATE
     ======================= */
  if (apps.length === 0) {
    return (
      <DashboardLayout>
        <EmptyState
          title="No applications yet"
          description="Start tracking your placement journey by adding your first application."
          action={
            <button
              onClick={() => setIsModalOpen(true)}
              style={{
                marginTop: "12px",
                background: "var(--primary)",
                color: "#fff",
                padding: "10px 16px",
                borderRadius: "8px",
                border: "none",
                cursor: "pointer",
              }}
            >
              + Add Application
            </button>
          }
        />

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        >
          <ApplicationForm
            initialData={editingApp}
            onSubmit={(app) => {
              addApplication(app);
              setIsModalOpen(false);
            }}
          />
        </Modal>
      </DashboardLayout>
    );
  }

  /* =======================
     FILTERING
     ======================= */
  const filteredApplications = apps.filter((app) => {
    const matchesSearch =
      app.company.toLowerCase().includes(search.toLowerCase()) ||
      app.role.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      status === "All" ? true : app.status === status;

    return matchesSearch && matchesStatus;
  });

  /* =======================
     SAVE HANDLER
     ======================= */
  function handleSave(app) {
    if (editingApp) {
      updateApp({ ...editingApp, ...app });
    } else {
      addApplication(app);
    }

    setIsModalOpen(false);
    setEditingApp(null);
  }

  /* =======================
     KPI METRICS
     ======================= */
  const total = apps.length;
  const offers = apps.filter((a) => a.status === "Offer").length;
  const rejected = apps.filter((a) => a.status === "Rejected").length;

  /* =======================
     DASHBOARD UI
     ======================= */
  return (
    <DashboardLayout>
      {/* KPI SECTION */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "24px",
        }}
      >
        <KPICard title="Total Applications" value={total} />
        <KPICard title="Offers" value={offers} />
        <KPICard title="Rejected" value={rejected} />
      </div>

      <h2 style={{ marginTop: "40px", marginBottom: "12px" }}>
        Applications
      </h2>

      {/* SEARCH + FILTER */}
<div
  style={{
    display: "flex",
    gap: "12px",
    marginBottom: "20px",
    background: "#f9fafb",
    padding: "14px",
    borderRadius: "12px",
    alignItems: "center",
    flexWrap: "wrap",
  }}
>
  <input
    placeholder="Search company or role..."
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    style={{
      padding: "10px 14px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      outline: "none",
      width: "260px",
      background: "#ffffff",
    }}
  />

  <select
    value={status}
    onChange={(e) => setStatus(e.target.value)}
    style={{
      padding: "10px 14px",
      borderRadius: "10px",
      border: "1px solid #e5e7eb",
      background: "#ffffff",
      outline: "none",
      cursor: "pointer",
    }}
  >
    {STATUS_OPTIONS.map((option) => (
      <option key={option} value={option}>
        {option}
      </option>
    ))}
  </select>
</div>

      {/* PRIMARY CTA */}
<div style={{ display: "flex", justifyContent: "flex-end", marginBottom: "16px" }}>
  <button
    onClick={() => {
      setEditingApp(null);
      setIsModalOpen(true);
    }}
    style={{
      background: "linear-gradient(135deg, #6366f1, #4f46e5)",
      color: "#ffffff",
      padding: "10px 18px",
      borderRadius: "10px",
      border: "none",
      fontWeight: "600",
      fontSize: "14px",
      cursor: "pointer",
      boxShadow: "0 8px 18px rgba(79,70,229,0.35)",
      transition: "transform 0.15s ease, box-shadow 0.15s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "translateY(-2px)";
      e.currentTarget.style.boxShadow =
        "0 12px 24px rgba(79,70,229,0.45)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "translateY(0)";
      e.currentTarget.style.boxShadow =
        "0 8px 18px rgba(79,70,229,0.35)";
    }}
  >
    ➕ Add Application
  </button>
</div>

      {/* TABLE / EMPTY FILTER */}
      {filteredApplications.length === 0 ? (
        <EmptyState
          title="No matching applications"
          description="Try adjusting your search or filters."
        />
      ) : (
  <div
    style={{
      background: "#ffffff",
      borderRadius: "14px",
      boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      overflow: "hidden",
    }}
  >
    <ApplicationTable data={filteredApplications} />
  </div>
)}

      {/* ANALYTICS */}
<h2 style={{ marginTop: "50px", marginBottom: "20px" }}>
  Analytics & Insights
</h2>

<div
  style={{
    display: "grid",
    gridTemplateColumns: "2fr 2fr 1fr",
    gap: "24px",
  }}
>
  {[
    <StatusChart applications={apps} />,
    <MonthlyTrendChart applications={apps} />,
    <ConversionMetrics applications={apps} />,
  ].map((component, i) => (
    <div
      key={i}
      style={{
        background: "#ffffff",
        padding: "16px",
        borderRadius: "14px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
      }}
    >
      {component}
    </div>
  ))}
</div>

      {/* MODAL */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingApp(null);
        }}
      >
        <ApplicationForm
          initialData={editingApp}
          onSubmit={handleSave}
        />
      </Modal>

      <p
        style={{
          marginTop: "30px",
          color: "var(--text-secondary)",
          fontSize: "14px",
        }}
      >
        Track your applications to unlock analytics and insights.
      </p>
    </DashboardLayout>
  );
}
