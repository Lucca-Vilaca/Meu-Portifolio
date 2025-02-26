import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../assets/theme.js";
import GlobalStyle from "../styles/GlobalStyle.js";
import Navbar from "../components/nav/Navbar";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
    <GlobalStyle />
    <Navbar toggleTheme={toggleTheme} />
    <About />
    <Skills />
    <Projects />
    <Contact />
    <Footer />
  </ThemeProvider>
  );
};

export default Home;
