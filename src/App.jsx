import "./App.css";
import Navbar from "./Navbar";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-10">
        <AnimatedRoutes/>
       
      </main>
    </>
  );
}

export default App;
