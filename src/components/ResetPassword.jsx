import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();
    const [password, setPassword] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                `https://employee-managment-system-backend-3.onrender.com/api/auth/reset-password/${token}`,
                { password }
            );
            alert("Password reset successfully ✅");
            navigate("/login");
        } catch {
            alert("Invalid or expired link ❌");
        }
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <h4 className="text-center mb-3">Reset Password</h4>

                <form onSubmit={submitHandler}>
                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="New Password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button className="btn btn-dark w-100">
                        Reset Password
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ResetPassword;
