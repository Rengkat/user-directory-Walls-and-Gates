import "./App.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Nav from "./components/Nav";
import { mockUsers } from "./util";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      {/*  Navigation */}
      <Nav />
      {/* Main */}
      <Main />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
