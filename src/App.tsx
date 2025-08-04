import "./App.css";
import { mockUsers } from "./util";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      {/*  Navigation */}
      <nav className="sticky top-0 z-50 bg-amber-900 text-white shadow-lg">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
          <h1 className="text-2xl md:text-3xl font-light tracking-wider">Users Directory</h1>
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                placeholder="Search users..."
                className="w-full pl-10 pr-4 py-2 rounded-full bg-amber-800 text-white placeholder-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-200 focus:bg-amber-950 transition-all duration-300"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2">🔍</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Footer */}
      <footer className="bg-amber-900 text-white text-center py-6">
        <p>© {new Date().getFullYear()} Silk Directory. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
