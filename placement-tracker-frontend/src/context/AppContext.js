import { createContext, useContext, useEffect, useState } from "react";
import {
  getApplications,
  createApplication,
  updateApplication,
  deleteApplication,
} from "../services/api";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadApplications();
  }, []);

  async function loadApplications() {
    try {
      setLoading(true);
      const data = await getApplications();
      setApps(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  async function addApplication(app) {
    const created = await createApplication(app);
    setApps((prev) => [created, ...prev]);
  }

  async function updateApp(app) {
    const updated = await updateApplication(app._id, app);
    setApps((prev) =>
      prev.map((a) => (a._id === updated._id ? updated : a))
    );
  }

  async function deleteApp(id) {
    await deleteApplication(id);
    setApps((prev) => prev.filter((a) => a._id !== id));
  }

  return (
    <AppContext.Provider
      value={{
        apps,
        loading,
        error,
        addApplication,
        updateApp,
        deleteApp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
