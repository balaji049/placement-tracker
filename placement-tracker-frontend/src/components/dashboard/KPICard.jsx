export default function KPICard({ title, value, color }) {
  return (
    <div
      style={{
        background: "#ffffff",
        padding: "20px",
        borderRadius: "16px",
        boxShadow: "0 10px 25px rgba(0,0,0,0.06)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 16px 35px rgba(0,0,0,0.08)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 10px 25px rgba(0,0,0,0.06)";
      }}
    >
      {/* Title */}
      <div
        style={{
          color: "var(--text-secondary)",
          fontSize: "14px",
          fontWeight: "500",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>

      {/* Value */}
      <div
        style={{
          fontSize: "32px",
          fontWeight: "700",
          color: color || "var(--text-primary)",
          lineHeight: "1",
        }}
      >
        {value}
      </div>

      {/* Accent Bar */}
      <div
        style={{
          marginTop: "14px",
          height: "4px",
          width: "40px",
          borderRadius: "999px",
          background: color || "var(--primary)",
          opacity: 0.9,
        }}
      />
    </div>
  );
}
