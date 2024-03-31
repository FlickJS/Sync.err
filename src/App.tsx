import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <div>
        <div className="login__panel flex justify-center">
          <div className="login__form p-10 h-screen flex items-center justify-center w-1/4">
            <form className="flex-1 flex flex-col">
              <label>Login:</label>
              <input type="text" className="mt-2"></input>
              <label>Password:</label>
              <input type="password" className="mt-2"></input>
              <button type="submit" className="mt-4">
                Log in
              </button>
              <a className="text-white text-center pt-4 cursor-pointer">
                Lost password?
              </a>
            </form>
          </div>
        </div>
      </div>
      <Dashboard />
    </>
  );
}

export default App;
