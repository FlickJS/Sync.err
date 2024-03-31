import React, { useState } from "react";

const LogIn = ({
  onLogin,
}: {
  onLogin: (username: string, password: string) => void;
}) => {
  const [authError, setAuthError] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const username = (
      e.currentTarget.elements.namedItem("username") as HTMLInputElement
    ).value;
    const password = (
      e.currentTarget.elements.namedItem("password") as HTMLInputElement
    ).value;
    if (username !== "admin" || password !== "admin") {
      setAuthError(true);
    } else {
      onLogin(username, password);
      setAuthError(false);
    }
  };

  return (
    <div className="login__panel flex justify-center">
      <div className="login__form p-10 h-screen flex items-center justify-center w-1/4">
        <form className="flex-1 flex flex-col" onSubmit={handleSubmit}>
          <label>Login:</label>
          <input
            name="username"
            type="text"
            className={`mt-2 ${authError ? "border-red-500 border" : ""}`}
          />
          <label>Password:</label>
          <input
            name="password"
            type="password"
            className={`mt-2 ${authError ? "border-red-500 border" : ""}`}
          />
          {authError && (
            <span className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
              Invalid username or password!
            </span>
          )}
          <button type="submit" className="mt-4">
            Log in
          </button>
          <a
            href="#lost-password"
            className="text-white text-center pt-4 cursor-pointer"
          >
            Lost password?
          </a>
          <span className="pt-1 text-center text-xs">Static admin/admin</span>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
