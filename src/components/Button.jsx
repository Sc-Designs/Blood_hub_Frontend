import React from 'react'
import { useNavigate } from "react-router-dom";
const Button = ({navigating, text, val}) => {
    const navigate = useNavigate();
  return (
    <button
      className={`${val == true ? "bg-[#0d282ecd]/90 w-fit tracking-wide text-white px-6 py-3 rounded-md  font-Poppins font-extrabold text-2xl hover:bg-[#0d282ecb]/100 transition-all duration-300" : "w-fit tracking-wide text-white px-6 py-3 rounded-md  font-Poppins font-extrabold text-2xl transition-all duration-300"}`}
      onClick={() => navigate(navigating)}>
      {text}
    </button>
  );
}

export default Button