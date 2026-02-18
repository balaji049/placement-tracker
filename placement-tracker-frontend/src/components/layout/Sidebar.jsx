import styles from "./sidebar.module.css";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>Placement Tracker</div>

      <nav className={styles.menu}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.active : ""}`
          }
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/applications"
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.active : ""}`
          }
        >
          Applications
        </NavLink>

        <NavLink
          to="/interviews"
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.active : ""}`
          }
        >
          Interviews
        </NavLink>

        <NavLink
          to="/analytics"
          className={({ isActive }) =>
            `${styles.menuItem} ${isActive ? styles.active : ""}`
          }
        >
          Analytics
        </NavLink>
      </nav>
    </aside>
  );
}
