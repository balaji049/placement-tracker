import { useState, useEffect } from "react";

const STATUS_OPTIONS = ["Applied", "Interview", "Offer", "Rejected"];

export default function ApplicationForm({ initialData, onSubmit }) {
  const [form, setForm] = useState({
    company: "",
    role: "",
    status: "Applied",
    appliedDate: "",
    stipend: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  // Prefill for Edit
  useEffect(() => {
    if (initialData) {
      setForm(initialData);
    }
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    // clear error as user types
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};

    if (!form.company.trim()) {
      newErrors.company = "Company name is required";
    }

    if (!form.role.trim()) {
      newErrors.role = "Role is required";
    }

    if (!form.appliedDate) {
      newErrors.appliedDate = "Applied date is required";
    } else if (new Date(form.appliedDate) > new Date()) {
      newErrors.appliedDate = "Date cannot be in the future";
    }

    if (form.stipend && isNaN(form.stipend)) {
      newErrors.stipend = "Stipend must be a number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!validate()) return;

    onSubmit(form);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{initialData ? "Edit Application" : "Add Application"}</h2>

      <Input
        label="Company"
        name="company"
        value={form.company}
        onChange={handleChange}
        error={errors.company}
      />

      <Input
        label="Role"
        name="role"
        value={form.role}
        onChange={handleChange}
        error={errors.role}
      />

      <label>Status</label>
      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        style={inputStyle}
      >
        {STATUS_OPTIONS.map((s) => (
          <option key={s}>{s}</option>
        ))}
      </select>

      <Input
        label="Applied Date"
        type="date"
        name="appliedDate"
        value={form.appliedDate}
        onChange={handleChange}
        error={errors.appliedDate}
      />

      <Input
        label="Stipend / Salary"
        name="stipend"
        value={form.stipend}
        onChange={handleChange}
        error={errors.stipend}
      />

      <label>Notes</label>
      <textarea
        name="notes"
        value={form.notes}
        onChange={handleChange}
        rows={3}
        style={{ ...inputStyle, resize: "none" }}
      />

      <button
        type="submit"
        style={{
          marginTop: "14px",
          background: "var(--primary)",
          color: "#fff",
          padding: "10px 16px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Save
      </button>
    </form>
  );
}

/* 🔹 Reusable Input Component */
function Input({ label, error, ...props }) {
  return (
    <div style={{ marginBottom: "8px" }}>
      <label>{label}</label>
      <input {...props} style={inputStyle} />
      {error && (
        <div style={{ color: "var(--danger)", fontSize: "12px" }}>
          {error}
        </div>
      )}
    </div>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  marginTop: "4px",
  borderRadius: "8px",
  border: "1px solid #d1d5db",
};
