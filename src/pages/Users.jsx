import { useState } from "react";
import axios from 'axios'
import Sidebar from "../components/Sidebar";
import "../styles/dashboard.css";
import { useEffect } from "react";

function Users() {
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
    status: ""
  });

  const dataHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  // post data
  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      if (editId) {
        // update -edit
        await axios.put(
          `https://employee-managment-system-backend-3.onrender.com/employe/update/${editId}`,
          data
        );
        alert("Employee updated ✅");
      } else {
        // create - register
        await axios.post(
          "https://employee-managment-system-backend-3.onrender.com/employe/register",
          data
        );
        alert("Employee registered ✅");
      }

      //from refrash 
      setData({
        name: "",
        email: "",
        department: "",
        salary: "",
        status: ""
      });

      setEditId(null)

      fetchEmployees()

    } catch (err) {
      console.log("Failed to register", err);
      alert(err.response?.message || "Failed to register❌");
    }
  };
  // get data 
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    try {
      setLoading(true);
      const res = await axios.get("https://employee-managment-system-backend-3.onrender.com/employe/showData");
      setEmployees(res.data);
      setLoading(false);
    } catch (error) {
      console.log("Failed to fetch employees", error);
      setLoading(false);
    }
  };

  //edit logic
  const editEmployee = (emp) => {
    setData({
      name: emp.name,
      email: emp.email,
      department: emp.department,
      salary: emp.salary,
      status: emp.status
    });

    setEditId(emp._id);
  };

  //delete 
  const deleteEmployee = async (id) => {
    if (!window.confirm("Are you sure you want to delete?")) return;

    try {
      await axios.delete(
        `https://employee-managment-system-backend-3.onrender.com/employe/delete/${id}`
      );
      alert("Employee deleted ✅");
      fetchEmployees();
    } catch (err) {
      console.log(err);
      alert("Delete failed ❌");
    }
  };


  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div className="dashboard-wrapper">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <main className="main-content bg-light">

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4>Employees</h4>
          <button className="btn btn-dark btn-sm">Add Employee</button>
        </div>

        {/* Employee Form */}
        <form onSubmit={submitHandler}>
          <div className="card shadow-sm border-0 mb-4">
            <div className="card-body">
              <h6 className="mb-3">Add Employee</h6>

              <div className="row g-3">
                {/* employee Name */}
                <div className="col-md-4">
                  <input className="form-control"
                    type="text"
                    id="name"
                    name="name"
                    value={data.name}
                    onChange={dataHandler}
                    placeholder="Employee Name"
                    required
                  />
                </div>

                {/* employee Email */}
                <div className="col-md-4">
                  <input className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={data.email}
                    onChange={dataHandler}
                    placeholder="Employee email"
                    required
                  />
                </div>

                <div className="col-md-4">
                  <select className="form-select"
                    id="department"
                    name="department"
                    value={data.department}
                    onChange={dataHandler}
                    required
                  >
                    <option>Department</option>
                    <option>HR</option>
                    <option>IT</option>
                    <option>Sales</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <input className="form-control" type="Number"
                    id="salary"
                    name="salary"
                    value={data.salary}
                    onChange={dataHandler}
                    placeholder="Employee Salary"
                    required />
                </div>
                <div className="col-md-4">
                  <select className="form-select"
                    id="status"
                    name="status"
                    value={data.status}
                    onChange={dataHandler}
                    required
                  >
                    <option>Status</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <button className="btn btn-dark w-100">
                    {editId ? "Update Employee" : "Save Employee"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>

        {/* Employee Table */}
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <h6 className="mb-3">Employee List</h6>
            <div className="table-responsive">
              <table className="table table-hover table-sm">
                <thead className="table-light">
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Status</th>
                    <th>Actions</th>

                  </tr>
                </thead>
                <tbody>
                  {loading ? (
                    <tr>
                      <td colSpan="4" className="text-center">Loading...</td>
                    </tr>
                  ) : employees.length === 0 ? (
                    <tr>
                      <td colSpan="4" className="text-center">No employees found</td>
                    </tr>
                  ) : (
                    employees.map((emp) => (
                      <tr key={emp._id}>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        <td>{emp.department}</td>
                        <td>
                          <span className={`badge ${emp.status === "Active" ? "bg-success" : "bg-secondary"}`}>
                            {emp.status}
                          </span>
                        </td>
                        {/* edit and delete button */}
                        <td>
                          {/* edit */}
                          <button
                            className="btn btn-sm btn-dark me-2"
                            onClick={() => editEmployee(emp)}
                          >
                            Edit
                          </button>
                          {/* delete */}
                          <button
                            className="btn btn-sm btn-danger"
                            onClick={() => deleteEmployee(emp._id)}
                          >
                            Delete
                          </button>
                        </td>

                      </tr>
                    ))
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

export default Users;
