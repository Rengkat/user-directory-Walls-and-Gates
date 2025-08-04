const UserCard = ({ user, onClick }) => {
  return (
    <div
      onClick={() => onClick(user)}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer transform hover:-translate-y-1 hover:scale-105 transition-transform duration-300">
      <div className="relative h-48 bg-gradient-to-r from-amber-200 to-amber-300 flex justify-center items-center">
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="h-32 w-32 rounded-full border-4 border-white shadow-md object-cover"
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-semibold text-amber-900">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-amber-600 mt-1 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          {user.email}
        </p>
        <p className="text-amber-700 mt-2 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          {user.location.city}, {user.location.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
