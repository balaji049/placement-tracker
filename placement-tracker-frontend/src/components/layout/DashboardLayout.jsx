import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const layoutStyle = {
  display: "flex",
  minHeight: "100vh",
};

const contentStyle = {
  flex: 1,
  padding: "24px",
};

export default function DashboardLayout({ children }) {
  return (
    <div style={layoutStyle}>
      <Sidebar />
      <div style={contentStyle}>
        <Navbar />
        {children}
      </div>
    </div>
  );
}
