import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { mockUsers } from "./util";
import UserModal from "./components/UserModal";

function App() {
  const [users, setUsers] = useState(mockUsers);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      {/*  Navigation */}
      <Nav />
      {/* Main */}
      <Main users={users} loading={loading} error={error} onUserClick={setSelectedUser} />
      {/* Footer */}
      <Footer />
      {/* User Modal */}
      {selectedUser && <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
}

export default App;
