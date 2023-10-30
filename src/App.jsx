import "./App.css";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
    <div>
      <h1>Hello ☕</h1>
      
    </div>
    </UserContextProvider>
  );
}

export default App;
