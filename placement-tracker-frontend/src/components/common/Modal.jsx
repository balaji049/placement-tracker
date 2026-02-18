export default function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.4)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          padding: "24px",
          width: "100%",
          maxWidth: "500px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
        }}
      >
        {children}

        <div style={{ textAlign: "right", marginTop: "20px" }}>
          <button
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              color: "var(--danger)",
              cursor: "pointer",
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
