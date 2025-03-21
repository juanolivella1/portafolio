import  useDarkMode  from "./hooks/useDarkMode";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-black dark:text-white">
      <header className="flex justify-end p-4">
        <button
          onClick={toggleTheme}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md"
        >
          {theme === "dark" ? "🌞 Modo Claro" : "🌙 Modo Oscuro"}
        </button>
      </header>

      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
