import UserCard from "./UserCard";
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
interface Login {
  uuid: string;
}

interface User {
  name: Name;
  email: string;
  location: Location;
  picture: Picture;
  gender: string;
  phone: string;
  dob: Dob;
  login: Login;
}

interface Props {
  users: User[];
  loading: boolean;
  error: string | null;
  onUserClick: (user: User) => void;
  currentPage: number;
  totalPages: number;
  paginate: (pageNumber: number) => void;
}

const Main = ({ users, loading, error, onUserClick, currentPage, totalPages, paginate }: Props) => {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6 rounded">
          <p>Error: {error}</p>
        </div>
      )}

      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-amber-600"></div>
        </div>
      ) : users.length === 0 ? (
        <div className="text-center py-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 mx-auto text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <h2 className="text-xl font-semibold text-amber-800 mt-4">No users found</h2>
          <p className="text-amber-600">Try adjusting your search</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((user) => (
              <UserCard key={user.login.uuid} user={user} onClick={onUserClick} />
            ))}
          </div>

          {/* Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8">
              <nav className="inline-flex rounded-md shadow">
                <button
                  onClick={() => paginate(Math.max(1, currentPage - 1))}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-l-md border border-amber-300 ${
                    currentPage === 1
                      ? "bg-amber-100 text-amber-400 cursor-not-allowed"
                      : "bg-white text-amber-700 hover:bg-amber-50"
                  }`}>
                  Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((number) => (
                  <button
                    key={number}
                    onClick={() => paginate(number)}
                    className={`px-4 py-2 border-t border-b border-amber-300 ${
                      currentPage === number
                        ? "bg-amber-500 text-white"
                        : "bg-white text-amber-700 hover:bg-amber-50"
                    }`}>
                    {number}
                  </button>
                ))}

                <button
                  onClick={() => paginate(Math.min(totalPages, currentPage + 1))}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-r-md border border-amber-300 ${
                    currentPage === totalPages
                      ? "bg-amber-100 text-amber-400 cursor-not-allowed"
                      : "bg-white text-amber-700 hover:bg-amber-50"
                  }`}>
                  Next
                </button>
              </nav>
            </div>
          )}
        </>
      )}
    </main>
  );
};

export default Main;
