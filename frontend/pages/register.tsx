import { useState } from "react";
import { useRouter } from "next/router";
import api from "../lib/api";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function Register() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    setMessage("");

    if (
      !username ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      setMessage("Please fill all fields.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const res = await api.post("/register", {
        username,
        email,
        password,
      });

      setMessage(
        res.data.message ||
          "Registration Successful"
      );

      setTimeout(() => {
        router.push("/login");
      }, 1500);
    } catch (error: any) {
      if (error.response?.data?.detail) {
        setMessage(error.response.data.detail);
      } else if (
        error.response?.data?.message
      ) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Registration Failed");
      }
    } finally {
      setLoading(false);
    }
  };
    return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-cyan-900 to-slate-950 flex items-center justify-center p-6">

      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8">

        {/* Title */}

        <div className="text-center mb-8">

          <h1 className="text-4xl font-bold text-white">
            Create Account
          </h1>

          <p className="text-cyan-100 mt-2">
            Register to continue
          </p>

        </div>

        <form
          onSubmit={handleRegister}
          className="space-y-5"
        >

          {/* Username */}

          <div className="relative">

            <User
              className="absolute left-4 top-4 text-slate-400"
              size={20}
            />

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 outline-none"
            />

          </div>

          {/* Email */}

          <div className="relative">

            <Mail
              className="absolute left-4 top-4 text-slate-400"
              size={20}
            />

            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-white border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 outline-none"
            />

          </div>

          {/* Password */}

          <div className="relative">

            <Lock
              className="absolute left-4 top-4 text-slate-400"
              size={20}
            />

            <input
              type={
                showPassword
                  ? "text"
                  : "password"
              }
              placeholder="Password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              className="w-full pl-12 pr-12 py-3 rounded-xl bg-white border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="absolute right-4 top-3 text-slate-500"
            >
              {showPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {/* Confirm Password */}

          <div className="relative">

            <Lock
              className="absolute left-4 top-4 text-slate-400"
              size={20}
            />

            <input
              type={
                showConfirmPassword
                  ? "text"
                  : "password"
              }
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(
                  e.target.value
                )
              }
              className="w-full pl-12 pr-12 py-3 rounded-xl bg-white border border-slate-300 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-300 outline-none"
            />

            <button
              type="button"
              onClick={() =>
                setShowConfirmPassword(
                  !showConfirmPassword
                )
              }
              className="absolute right-4 top-3 text-slate-500"
            >
              {showConfirmPassword ? (
                <EyeOff size={20} />
              ) : (
                <Eye size={20} />
              )}
            </button>

          </div>

          {/* Register Button */}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-cyan-600 to-blue-700 hover:from-cyan-700 hover:to-blue-800 transition text-white py-3 rounded-xl font-semibold shadow-lg disabled:opacity-60"
          >
            {loading
              ? "Creating Account..."
              : "Register"}
          </button>

          {/* Message */}

          {message && (
            <div
              className={`text-center font-medium ${
                message.toLowerCase().includes("success")
                  ? "text-green-300"
                  : "text-red-300"
              }`}
            >
              {message}
            </div>
          )}

          {/* Login */}

          <div className="text-center pt-2">

            <span className="text-slate-200">
              Already have an account?
            </span>

            <button
              type="button"
              onClick={() =>
                router.push("/login")
              }
              className="ml-2 text-cyan-300 hover:text-cyan-200 font-semibold"
            >
              Login
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}