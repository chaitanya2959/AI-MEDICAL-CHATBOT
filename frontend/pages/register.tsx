import { useState } from "react";
import { useRouter } from "next/router";
import api from "../lib/api";

export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (e: any) => {
    e.preventDefault();

    try {
      await api.post("/register", {
        username,
        email,
        password,
      });

      setMessage("Registration Successful");

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error: any) {
      setMessage("Registration Failed");
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h1 className="text-3xl font-bold text-center mb-6">
          Register
        </h1>

        <input
          type="text"
          placeholder="Username"
          className="w-full border p-3 rounded mb-4"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-3 rounded"
        >
          Register
        </button>

        {message && (
          <p className="mt-4 text-center">{message}</p>
        )}
      </form>
    </div>
  );
}