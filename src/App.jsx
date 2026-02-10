import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import firebase from 'firebase/compat/app';
import { signInWithGoogle } from "./auth/firebase";

function App() {
  const handleLogin = async () => {
    try {
      const result = await signInWithGoogle();
      console.log(result.user);
      alert("Login Successful!");
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <button
        onClick={handleLogin}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-lg font-semibold transition"
      >
        Login with Google
      </button>
    </div>
  );
}

export default App;
