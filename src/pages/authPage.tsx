import { Layout } from "./layout/layout";
import { useState, useEffect } from "react";

export const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true); // Alterna entre Login e Registro
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [clientRequestId, setClientRequestId] = useState<string | null>(null);
  const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null); // Notification state

  const toggleAuthMode = () => setIsLogin(!isLogin);

  useEffect(() => {
    // Obtém o clientRequestId da URL
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get("clientRequestId");
    setClientRequestId(clientId);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (isLogin) {
        // Login
        const response = await fetch(`https://timetower-server.onrender.com/api/user/${clientRequestId}/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setNotification({ message: "Login successful!", type: 'success' });
          console.log("Login successful:", data);
          // Aqui você pode armazenar o token ou redirecionar o usuário
        } else {
          const errorData = await response.json();
          setNotification({ message: errorData.message || "Login failed!", type: 'error' });
          console.error("Login failed:", errorData);
        }
      } else {
        // Registro
        const response = await fetch(`https://timetower-server.onrender.com/api/user/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        if (response.ok) {
          const data = await response.json();
          setNotification({ message: "Registration successful!", type: 'success' });
          console.log("Registration successful:", data);
        } else {
          const errorData = await response.json();
          setNotification({ message: errorData.message || "Registration failed!", type: 'error' });
          console.error("Registration failed:", errorData);
        }
      }
    } catch (error) {
      console.error("Error:", error);
      setNotification({ message: "An error occurred. Please try again.", type: 'error' });
    }
  };

  return (
    <Layout>
      <section className="flex flex-col items-center w-full gap-8 py-20 bg-gradient-to-b from-white to-gray-100">
        <h1 className="text-5xl font-bold">
          {isLogin ? "Login to TimeTower" : "Register for TimeTower"}
        </h1>

        {notification && (
          <div className={`w-full max-w-md p-4 mt-4 rounded-md text-white ${notification.type === 'success' ? 'bg-green-500' : 'bg-red-500'}`}>
            {notification.message}
          </div>
        )}

        <form className="flex flex-col gap-4 w-full max-w-md" onSubmit={handleSubmit}>
          {(isLogin && clientRequestId) ??
          (
            <p>You must make a request to login from the app.</p>
          )
          }
          <input
            type="text"
            placeholder="Username"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {!isLogin && (
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full p-3 border border-gray-300 rounded-md"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}

          <button
            type="submit"
            className="w-full bg-black text-white py-3 text-xl font-semibold rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="text-gray-700">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={toggleAuthMode}
            className="text-blue-600 ml-2 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>

      
      </section>
    </Layout>
  );
};
