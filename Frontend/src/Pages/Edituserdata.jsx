import React from "react";
import { Link } from "react-router-dom";

function Edituserdata() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-extrabold my-7 text-blue-900">
        EDIT USER DATA
      </h1>
      

      <form className='flex flex-col items-center gap-4'>

      <img
          src='https://via.placeholder.com/50'
          alt='profile_pic'
          className='h-24 w-24 cursor-pointer rounded-full object-cover mt-2'
          onClick={() => fileRef.current.click()}
        />
        <input
          type="text"
          placeholder="Enter your name"
          id="username"
          className="bg-slate-300 p-3 rounded-lg w-full"
        />
        <input
          type="email"
          placeholder="Enter your email"
          id="email"
          className="bg-slate-300 p-3 rounded-lg w-full"
        />
        <input
          type="password"
          placeholder="Enter new password"
          id="password"
          className="bg-slate-300 p-3 rounded-lg w-full"
        />

        <button
          type="submit"
          className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >UPDATE</button>
      </form>
    </div>
  );
}

export default Edituserdata;
