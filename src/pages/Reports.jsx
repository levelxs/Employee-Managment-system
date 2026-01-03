import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Reports() {
  return (
    <div className="dashboard-wrapper">

      <Sidebar/>

      <main className="main-content bg-light">

        <h4 className="mb-4">Reports</h4>

        <div className="row g-3">
          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted">Total Employees</p>
                <h3>120</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted">Active Employees</p>
                <h3>95</h3>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm border-0">
              <div className="card-body">
                <p className="text-muted">Inactive Employees</p>
                <h3>25</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="card mt-4 shadow-sm border-0">
          <div className="card-body">
            <h6 className="mb-3">Department Wise Report</h6>
            <table className="table table-sm table-hover">
              <thead className="table-light">
                <tr>
                  <th>Department</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>IT</td><td>40</td></tr>
                <tr><td>HR</td><td>30</td></tr>
                <tr><td>Sales</td><td>50</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Reports;
