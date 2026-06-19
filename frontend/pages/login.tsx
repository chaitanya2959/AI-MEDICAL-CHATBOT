import { useState } from "react";
import { useRouter } from "next/router";
import api from "../lib/api";

export default function Login() {
const router = useRouter();

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);
const [showPassword, setShowPassword] = useState(false);

const handleLogin = async (e: any) => {
e.preventDefault();


setLoading(true);
setMessage("");

try {
  const response = await api.post("/login", {
    email,
    password,
  });

  localStorage.setItem(
    "token",
    response.data.access_token || response.data.token
  );

  localStorage.setItem("email", email);

  setMessage("Login Successful");

  setTimeout(() => {
    router.push("/dashboard");
  }, 1000);
} catch (error: any) {
  setMessage("Invalid Email or Password");
  console.error(error);
} finally {
  setLoading(false);
}


};

return ( <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-100 to-blue-200"> <div className="bg-white w-full max-w-md p-8 rounded-2xl shadow-xl">


    <div className="text-center mb-6">
      <h1 className="text-3xl font-bold text-cyan-700">
        AI Medical Chatbot
      </h1>

      <p className="text-gray-500 mt-2">
        Secure Login Portal
      </p>
    </div>

    <form onSubmit={handleLogin}>
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Password
        </label>

        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter Password"
          className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="button"
          onClick={() =>
            setShowPassword(!showPassword)
          }
          className="text-sm text-cyan-600 mt-2"
        >
          {showPassword
            ? "Hide Password"
            : "Show Password"}
        </button>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-cyan-600 hover:bg-cyan-700 text-white p-3 rounded-lg font-semibold"
      >
        {loading ? "Logging In..." : "Login"}
      </button>

      {message && (
        <p className="mt-4 text-center text-red-600">
          {message}
        </p>
      )}
    </form>
  </div>
</div>


);
}
