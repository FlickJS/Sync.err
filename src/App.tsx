import { useState } from "react";
import "./App.css";
import LogIn from "./components/login/LogIn";
import Profiles from "./pages/Profiles";
import Header from "./components/header/Header";

interface User {
  login: string;
  password: string;
  websites: {
    name: string;
    icon: string;
  }[];
}

const users = [
  {
    login: "admin",
    password: "admin",
    websites: [
      {
        name: "Facebook",
        icon: "/facebook.png",
      },
      {
        name: "X/ex-Twitter",
        icon: "/x.jpg",
      },
    ],
  },
];

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState<User>();

  const handleLogin = (username: string, password: string) => {
    const foundUser = users.find(
      (user) => user.login === username && user.password === password
    );
    if (foundUser) {
      setUser(foundUser);
      setIsLogged(true);
    }
  };

  return (
    <>
      <Header />
      {!isLogged ? (
        <LogIn onLogin={handleLogin} />
      ) : (
        <Profiles customerInfo={user} />
      )}
    </>
  );
}

export default App;
