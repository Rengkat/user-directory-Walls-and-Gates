import { useEffect, useState } from "react";
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
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    const filtered = users.filter((user) => {
      const fullName = `${user.name.first} ${user.name.last}`.toLowerCase();
      return fullName.includes(searchTerm.toLowerCase());
    });
    setFilteredUsers(filtered);
  }, [searchTerm, users]);

  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      {/*  Navigation */}
      <Nav searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {/* Main */}
      <Main users={filteredUsers} loading={loading} error={error} onUserClick={setSelectedUser} />
      {/* Footer */}
      <Footer />
      {/* User Modal */}
      {selectedUser && <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
}

export default App;
