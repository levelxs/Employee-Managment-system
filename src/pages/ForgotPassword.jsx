import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(
                "http://localhost:5000/api/auth/forgot-password",
                { email }
            );
            alert(res.data.message);
        } catch (err) {
            console.log("AXIOS ERROR:", err.response?.data || err.message);
            alert(err.response?.data?.message || "Failed to send reset link ❌");

        }
    };

    return (
        <div className="vh-100 d-flex justify-content-center align-items-center bg-light">
            <div className="card p-4 shadow" style={{ width: "400px" }}>
                <h4 className="card-title text-center mb-3">Forgot Password</h4>

                <form onSubmit={submitHandler}>
                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Enter registered email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button className="btn btn-dark w-100">
                        Send Reset Link
                    </button>
                </form>

                <div className="text-center mt-3">
                    <Link to="/login">Back to Login</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
