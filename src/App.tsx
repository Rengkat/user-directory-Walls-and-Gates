import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { mockUsers } from "./util";

function App() {
  const [users, setUsers] = useState(mockUsers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  console.log(users);
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      {/*  Navigation */}
      <Nav />
      {/* Main */}
      <Main users={users} loading={loading} error={error} />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
