import { useState } from "react";
import "./App.css";
import LogIn from "./components/LogIn";
import Dashboard from "./pages/Dashboard";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (username: string, password: string) => {
    if (username === "admin" && password === "admin") {
      setIsLogged(true);
    }
  };

  return <>{!isLogged ? <LogIn onLogin={handleLogin} /> : <Dashboard />}</>;
}

export default App;
