// eslint-disable-next-line
import React, { useState } from "react";
import "../../css/SignInForm.css"; // Create this CSS file for styling
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Header from "../Header/HeaderComponent";
import { Checkbox, FormControlLabel } from "@mui/material";

const Signin = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Add form submission logic here

        try {
            const response = await fetch("https://your-api-endpoint.com/signin", {
                method: "POST", headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            });



            if (response.ok) {
                navigate("HomePage");
            } else {
                const errorData = await response.json();
                alert(errorData.message || "Sign in failed");
            }
        }
        catch (error) {
            console.error("Error during sign-in. ", error);
            alert("Something went wrong. Please try again");
        }

        console.log(formData);
    };




    // Handle Google Login success and failure
    const handleGoogleSuccess = (credentialResponse) => {
        console.log("Google Login Success:", credentialResponse);

        // Send the token to your backend for verification
        fetch("https://your-api-endpoint.com/google-signin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ token: credentialResponse.credential }),
        })
            .then((res) => {
                if (res.ok) {
                    navigate("/HomePage");
                } else {
                    alert("Google Sign-In failed.");
                }
            })
            .catch((error) => console.error("Error during Google Sign-In:", error));
    };

    const handleGoogleFailure = (error) => {
        console.error("Google Login Failure:", error);
        alert("Google Login failed. Please try again.");
    };


    return (


        <div className="signin-container">
            <h1 className="title">Welcome Back</h1>
            <p className="subtitle">Great to see you! Please enter your details</p>
            <button className="google-button">Sign in with Google</button>
            <div className="divider">
                <span>or</span>
            </div>
            <form onSubmit={handleSubmit} className="signin-form">
                <input
                    type="email"
                    name="email"
                    placeholder="Email id"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <div className="password-container">
                    <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button
                        type="button"
                        className="toggle-password"
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? "Hide" : "Show"}
                    </button>
                </div>
                <div className="forgot-password flex justify-between items-center ">
                    <div className="text-xs flex items-center justify-center text-gray-700 cursor-pointer">
                        <input
                            type="checkbox"
                            id="rememberMe"
                            className="text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <label className="inline-block">Remember Me</label>
                    </div>
                    <a href="/forgot-password" className="text-[#6a5acd] text-xs">Forgot Password?</a>
                </div>
                <button type="submit" className="signin-button">Sign In</button>
            </form>
            <p className="signup-link">
                <a href="/signup">Sign up as ReachRanger</a>
            </p>
        </div>


    );
};

export default Signin;