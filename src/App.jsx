import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { site } from "./data/site";

const App = () => {
  useEffect(() => {
    document.title = site.name;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", `${site.role} portfolio.`);
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg font-sans text-white antialiased selection:bg-green-600 selection:text-white">
      <div className="mx-auto w-full max-w-[47.5rem] px-6">
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