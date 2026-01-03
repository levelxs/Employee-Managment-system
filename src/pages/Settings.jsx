import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";

function Settings() {
  return (
    <div className="dashboard-wrapper">

      <Sidebar/>

      <main className="main-content bg-light">

        <h4 className="mb-4">Settings</h4>

        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h6 className="mb-3">Application Settings</h6>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Company Name</label>
                <input className="form-control" placeholder="My Company" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Admin Email</label>
                <input className="form-control" placeholder="admin@mail.com" />
              </div>

              <div className="col-md-6">
                <label className="form-label">Default Currency</label>
                <select className="form-select">
                  <option>INR</option>
                  <option>USD</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">Theme</label>
                <select className="form-select">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>

              <div className="col-12">
                <button className="btn btn-dark mt-2">
                  Save Settings
                </button>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}

export default Settings;
