import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { mockUsers } from "./util";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      {/*  Navigation */}
      <Nav />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
