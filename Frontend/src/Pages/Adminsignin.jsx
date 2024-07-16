import React, { useState } from "react";
import { useToast } from "@chakra-ui/toast";
import { useNavigate } from "react-router-dom";

function Adminsignin() {
  const [adminData, setAdminData] = useState({});
  const toast = useToast();
  const navigate = useNavigate()


  const handleChange = (e) => {
    setAdminData({ ...adminData, [e.target.id]: e.target.value });
  };

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/admin/admin-signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(adminData),
      });

      if (!res.ok) {
        const errorText = await res.text(); 
        throw new Error(errorText || "An error occurred while signing up.");
      }

      const data = await res.json();
      console.log("data is >>", data);

      toast({
        description: "Sign-up successful.",
        status: "success",
        duration: 3000,
      });
      navigate('/admin-home')
    } catch (error) {
      toast({
        description: error.message || "An error occurred. Please try again later.",
        status: "error",
        duration: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-extrabold my-7">ADMIN SIGN-IN</h1>
      <form className="flex flex-col gap-4" onSubmit={handleForm}>
        <input
          type="adminemail"
          placeholder="Enter your email"
          id="adminemail"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter your password"
          id="password"
          className="bg-slate-100 p-3 rounded-lg"
          onChange={handleChange}
        />
       
        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          Sign-in
        </button>
      </form>
    </div>
  );
}

export default Adminsignin;
