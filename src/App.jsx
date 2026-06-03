import "./App.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <>
      <Navbar />
      <main className="p-10">
      
        <AnimatedRoutes/>
       
      </main>
      <Footer/>
    </>
  );
}

export default App;
