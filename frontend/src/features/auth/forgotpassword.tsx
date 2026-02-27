import { useState } from "react";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      alert("Please enter your email");
      return;
    }

    setMessage(`Reset link sent to ${email}`);
    setEmail("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-500">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h2 className="text-xl font-bold text-center mb-4">
          Forgot Password
        </h2>

        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full p-2 border rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="w-full bg-blue-600 text-white p-2 rounded">
            Send Reset Link
          </button>
        </form>

        {message && (
          <p className="text-green-600 text-center mt-4">{message}</p>
        )}
      </div>
    </div>
  );
};

export default ForgotPassword;