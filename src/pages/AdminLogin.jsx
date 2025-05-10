import React, { useContext, useState } from 'react'
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import {AdminContext} from "../context/admin.context"
import AdminAxios from "../config/AdminAxios"
import { toast } from 'react-toastify';
const AdminLogin = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const { setAdmin } = useContext(AdminContext);
    const navigate = useNavigate();


    const onSubmit = async (data) => {
      const { email, password } = data;
      try {
        const res = await AdminAxios.post("/admin/login",{email,password});
        setAdmin(res.data.admin);
        localStorage.setItem("adminToken",res.data.token)
        navigate("/admin")
        toast.success("🎉 Login successfully.");
      } catch (error) {
        toast.error("❌ Try again!");
      }
    };
  return (
    <div className="w-full h-screen bg-black flex justify-center items-center text-white">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 w-[90%] lg:w-[40%] border-2 px-5 py-10 rounded-lg">
        <h1 className="text-3xl font-Poppins text-center uppercase">Admin Login</h1>

        {/* Email Field */}
        <div>
          <label className="font-Poppins text-xl" htmlFor="email">
            Email:
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="font-Roboto mt-2 outline-none border p-2 rounded w-full"
            placeholder="Enter your email..."
            type="email"
            id="email"
          />
          {errors.email && (
            <p className="text-[#FF3B30] font-Roboto">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div>
          <label className="font-Poppins text-xl" htmlFor="password">
            Password:
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="font-Roboto mt-2 outline-none border p-2 rounded w-full"
            placeholder="Enter your password..."
            type="password"
            id="password"
          />
          {errors.password && (
            <p className="text-[#FF3B30] font-Roboto">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full py-3 bg-sky-500 mt-5">
          Login
        </button>

        {/* Links and UI Extras */}

        <div className="flex justify-center items-center gap-2">
          <span className="w-[100px] h-[1px] bg-sky-500"></span>
          <p className="text-lg">Or</p>
          <span className="w-[100px] h-[1px] bg-sky-500"></span>
        </div>

        <div className="flex justify-center items-center gap-2">
          <p className="text-lg">Login with</p>
          <span className="w-[100px] px-5 py-2 rounded bg-sky-500 cursor-pointer">
            Google
          </span>
        </div>

        <div>
          <p className="text-center font-Roboto text-lg flex flex-col gap-y-2">
            Don't remember your password?
            <span className="text-sky-500 cursor-pointer">
              {" "}
              Forget Password
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default AdminLogin