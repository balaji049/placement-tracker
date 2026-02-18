const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
};

export default function Card({ children }) {
  return (
    <div
      style={{
        background: "var(--bg-card)",
        borderRadius: "var(--radius)",
        padding: "20px",
        boxShadow: "var(--shadow)",
      }}
    >
      {children}
    </div>
  );
}