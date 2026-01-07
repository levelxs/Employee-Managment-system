import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // 🔹 Stats state
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
    totalSalary: 0,
  });

  // 🔹 Employees state
  const [employees, setEmployees] = useState([]);

  // 🔹 Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const res = await axios.get("https://employee-managment-system-backend-3.onrender.com/employe/dashboardData");
      if (res.data.success) {
        setStats(res.data.dashboard);
        setEmployees(res.data.employees);
      }
    } catch (error) {
      console.log("Error fetching dashboard data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-wrapper">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main Content */}
      <main className="main-content bg-light">

        {/* Mobile toggle */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <button
            className="btn btn-outline-dark d-md-none"
            onClick={() => setSidebarOpen(true)}
          >
            ☰
          </button>
        </div>

        {/* Topbar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Dashboard</h4>
        </div>

        {/* 🔹 Stats Cards */}
        <div className="row g-3">
          <div className="col-lg-3 col-md-6 col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted mb-1">Total Employees</p>
                <h3>{stats.totalEmployees}</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted mb-1">Active Employees</p>
                <h3>{stats.activeEmployees}</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted mb-1">Inactive Employees</p>
                <h3>{stats.inactiveEmployees}</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted mb-1">Total Salary</p>
                <h3>₹{stats.totalSalary}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Employees Table */}
        <div className="card mt-4 shadow-sm border-0">
          <div className="card-body">
            <h6 className="mb-3">Recent Employees</h6>
            <div className="table-responsive">
              <table className="table table-hover table-sm mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Salary</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="5" className="text-center">
                        Loading...
                      </td>
                    </tr>
                  ) : employees.length > 0 ? (
                    employees.map((emp) => (
                      <tr key={emp._id}>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.department}</td>
                        <td>₹{emp.salary}</td>
                        <td>
                          <span
                            className={`badge ${emp.status === "Active"
                              ? "bg-success"
                              : "bg-secondary"
                              }`}
                          >
                            {emp.status}
                          </span>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center">
                        No employees found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
