import { NavLink } from "react-router-dom";
import "../styles/dashboard.css";
import Sidebar from "../components/Sidebar";


function Dashboard() {
  return (
    <div className="dashboard-wrapper">
      
      {/* Sidebar */}
      <Sidebar/>

      {/* Main Content */}
      <main className="main-content bg-light">
        
        {/* Topbar */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="mb-0">Dashboard</h4>
          
        </div>

        {/* Stats */}
        <div className="row g-3">
          <div className="col-lg-4 col-md-6 col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted mb-1">Total Users</p>
                <h3>1,245</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted mb-1">Revenue</p>
                <h3>₹78,000</h3>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-12">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted mb-1">Orders</p>
                <h3>320</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="card mt-4 shadow-sm border-0 ">
          <div className="card-body">
            <h6 className="mb-3">Recent Users</h6>
            <div className="table-responsive">
              <table className="table table-hover table-sm mb-0">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Rahul</td>
                    <td>rahul@mail.com</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Amit</td>
                    <td>amit@mail.com</td>
                    <td><span className="badge bg-secondary">Inactive</span></td>
                  </tr>
                  <tr>
                    <td>Neha</td>
                    <td>neha@mail.com</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
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
