import styles from "./navbar.module.css";
const navbarStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: "24px",
};

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.title}>Dashboard</div>
      <div className={styles.user}>Hello, Student</div>
    </div>
  );
}
