export default function EmptyState({ title, description, action }) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "80px 20px",
        color: "var(--text-secondary)",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: "600",
          color: "var(--text-primary)",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          style={{
            marginTop: "8px",
            fontSize: "14px",
          }}
        >
          {description}
        </p>
      )}

      {action && (
        <div style={{ marginTop: "20px" }}>
          {action}
        </div>
      )}
    </div>
  );
}
