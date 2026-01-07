import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  const handlelogout = () => {
    if (window.confirm("Are you sure you want to logout? 😢")) {
      localStorage.removeItem("token");
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  };

  return (
    <aside className={`sidebar bg-dark text-white ${isOpen ? "open" : ""}`}>

      {/* Mobile close button */}
      <button
        className="btn btn-light close-btn d-md-none"
        onClick={onClose}
      >
        ✖
      </button>

      <h5 className="mb-4">
        <NavLink to='/admin/dashboard' className='nav-link text-white'>
          MyAdmin
        </NavLink>
      </h5>

      <ul className="nav flex-column gap-2">
        <NavLink to='/admin/dashboard' className="nav-link text-secondary">Dashboard</NavLink>
        <NavLink to='/admin/users' className="nav-link text-secondary">Users</NavLink>
        <NavLink to='/admin/reports' className="nav-link text-secondary">Reports</NavLink>
        <NavLink to='/admin/settings' className="nav-link text-secondary">Settings</NavLink>

        <button
          className="badge bg-light text-dark px-3 py-2 mt-3"
          onClick={handlelogout}
        >
          Logout
        </button>
      </ul>
    </aside>
  )
}

export default Sidebar
