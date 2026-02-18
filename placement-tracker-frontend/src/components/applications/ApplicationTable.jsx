import { useNavigate } from "react-router-dom";
import StatusBadge from "../common/StatusBadge";
import styles from "./applicationsTable.module.css";

export default function ApplicationTable({ data }) {
  const navigate = useNavigate();

  return (
    <div className={styles.tableWrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Company</th>
            <th>Role</th>
            <th>Status</th>
            <th>Applied Date</th>
            <th>Stipend</th>
          </tr>
        </thead>

        <tbody>
          {data.map((app, index) => (
            <tr
              key={app._id} // ✅ MongoDB ID
              className={styles.row}
              onClick={() => navigate(`/applications/${app._id}`)} // ✅ CRITICAL
              style={{
                cursor: "pointer",
                transition: "background 0.2s ease",
                background: index % 2 === 0 ? "transparent" : "#fcfcfd", // zebra rows
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.background = "#f9fafb")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.background =
                  index % 2 === 0 ? "transparent" : "#fcfcfd")
              }
            >
              <td>{app.company}</td>
              <td>{app.role}</td>
              <td>
                <StatusBadge status={app.status} />
              </td>
              <td>{app.appliedDate}</td>
              <td>{app.stipend}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
