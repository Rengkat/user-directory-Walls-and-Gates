import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { mockUsers } from "./util";
import UserModal from "./components/UserModal";
interface Location {
  street: {
    number: number;
    name: string;
  };
  city: string;
  state: string;
  country: string;
  postcode: string | number;
}

interface Name {
  first: string;
  last: string;
}

interface Picture {
  large: string;
}

interface Dob {
  age: number;
}

interface User {
  name: Name;
  email: string;
  location: Location;
  picture: Picture;
  gender: string;
  phone: string;
  dob: Dob;
}
function App() {
  const [users, setUsers] = useState<User[]>(mockUsers);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [usersPerPage] = useState<number>(8);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);
  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  // Change page
  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
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
      <Main
        users={currentUsers}
        loading={loading}
        error={error}
        onUserClick={setSelectedUser}
        currentPage={currentPage}
        totalPages={totalPages}
        paginate={paginate}
      />{" "}
      {/* Footer */}
      <Footer />
      {/* User Modal */}
      {selectedUser && <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  );
}

export default App;
