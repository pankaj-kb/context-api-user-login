import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profle";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <div>
        <h1>Hello ☕</h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
