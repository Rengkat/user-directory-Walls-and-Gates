const UserModal = ({ user, onClose }) => {
  console.log(user);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-amber-600 hover:text-amber-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-8">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              className="h-40 w-40 rounded-full border-4 border-amber-200 shadow-lg"
            />
            <div>
              <h2 className="text-3xl font-bold text-amber-900">
                {user.name.first} {user.name.last}
              </h2>
              <p className="text-amber-600 mt-2">{user.email}</p>
              <p className="text-amber-700 mt-1">
                {user.location.city}, {user.location.country}
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800">Personal Info</h3>
              <p className="mt-2 text-amber-700">
                <span className="font-medium">Gender:</span> {user.gender}
              </p>
              <p className="text-amber-700">
                <span className="font-medium">Age:</span> {user.dob.age}
              </p>
              <p className="text-amber-700">
                <span className="font-medium">Phone:</span> {user.phone}
              </p>
            </div>

            <div className="bg-amber-50 p-4 rounded-lg">
              <h3 className="font-semibold text-amber-800">Location</h3>
              <p className="mt-2 text-amber-700">
                {user.location.street.number} {user.location.street.name}
              </p>
              <p className="text-amber-700">
                {user.location.city}, {user.location.state}
              </p>
              <p className="text-amber-700">
                {user.location.country}, {user.location.postcode}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
