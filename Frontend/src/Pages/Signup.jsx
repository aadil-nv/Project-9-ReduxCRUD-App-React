import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";

function Signup() {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const toast = useToast();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);

      const res = await fetch("/api/auth/sign-up", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      setLoading(false);

      if (data.success === false) {
        setError(true);
        toast({
          description: data.message || "An error occurred.",
          status: "error",
          duration: 3000,
        });
        return;
      }

      toast({
        description: "account created successfully",
        status: "success",
        duration: 3000,
      });
    } catch (error) {
      setLoading(false);
      setError(true);
      toast({
        description: "An error occurred. Please try again later.",
        status: "error",
        duration: 3000,
      });
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-extrabold my-7">Signup page</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          id="username"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Enter new password"
          id="password"
          onChange={handleChange}
          className="bg-slate-100 p-3 rounded-lg"
        />

        <button
          disabled={loading}
          type="submit"
          onChange={handleChange}
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an account</p>
        <Link to="/sign-in">
          <span className="text-blue-500">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default Signup;
