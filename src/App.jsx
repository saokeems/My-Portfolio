import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="min-h-screen bg-dark-bg font-sans text-white">
      <div className="w-full px-6">
        <Navbar />
        <main className="flex w-full flex-col pb-10">
          <Hero />
          <TechStack />
          <Experience />
          <Projects />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default App;