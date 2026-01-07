import { useState, useEffect } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Reports() {
  // 🔹 Stats
  const [stats, setStats] = useState({
    totalEmployees: 0,
    activeEmployees: 0,
    inactiveEmployees: 0,
  });

  // 🔹 Department wise employees
  const [deptData, setDeptData] = useState([]);

  // 🔹 Loading state
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReportData();
  }, []);

  const fetchReportData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/employe/dashboardData"); // same API as dashboard
      if (res.data.success) {
        // 1️⃣ Stats
        const { totalEmployees, activeEmployees, inactiveEmployees } = res.data.dashboard;
        setStats({ totalEmployees, activeEmployees, inactiveEmployees });

        // 2️⃣ Department wise count
        const employees = res.data.employees;

        const deptCount = employees.reduce((acc, emp) => {
          if (acc[emp.department]) {
            acc[emp.department] += 1;
          } else {
            acc[emp.department] = 1;
          }
          return acc;
        }, {});

        // convert object to array for table
        const deptArray = Object.keys(deptCount).map((dept) => ({
          department: dept,
          total: deptCount[dept],
        }));

        setDeptData(deptArray);
      }
    } catch (error) {
      console.log("Error fetching report data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="dashboard-wrapper">
      <Sidebar />

      <main className="main-content bg-light">
        <h4 className="mb-4">Reports</h4>

        {/* 🔹 Stats Cards */}
        <div className="row g-3 mb-4">
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted">Total Employees</p>
                <h3>{loading ? "..." : stats.totalEmployees}</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted">Active Employees</p>
                <h3>{loading ? "..." : stats.activeEmployees}</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted">Inactive Employees</p>
                <h3>{loading ? "..." : stats.inactiveEmployees}</h3>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 Department Wise Table */}
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h6 className="mb-3">Department Wise Report</h6>
            <div className="table-responsive">
              <table className="table table-sm table-hover">
                <thead className="table-light">
                  <tr>
                    <th>Department</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="2" className="text-center">Loading...</td>
                    </tr>
                  ) : deptData.length > 0 ? (
                    deptData.map((d, index) => (
                      <tr key={index}>
                        <td>{d.department}</td>
                        <td>{d.total}</td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="text-center">No data found</td>
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

export default Reports;
