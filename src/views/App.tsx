import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="hello-react-app">
      <h1>Hello React</h1>
      <Outlet />
    </div>
  );
}

export default App;
