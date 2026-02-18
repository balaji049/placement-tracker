const statusColors = {
  Applied: "#2563eb",
  Interview: "#f59e0b",
  Offer: "#16a34a",
  Rejected: "#dc2626",
};

export default function StatusBadge({ status }) {
  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "999px",

        fontSize:  "12px",
        fontWeight: 500,
        background: statusColors[status],
        color: "#fff",
      }}
    >
      {status}
    </span>
  );
}
