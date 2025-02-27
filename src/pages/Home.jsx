import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../styles/theme.js";
import GlobalStyle from "../styles/GlobalStyle.js";
import Navbar from "../components/nav/Navbar";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import ParallaxSection from "../components/parallax/ParallaxSection.jsx";
import bgAbout from "../assets/img3parallax.jpg";
import bgSkills from "../assets/img1parallax.jpg";

const Home = () => {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
    <GlobalStyle />
    <Navbar toggleTheme={toggleTheme} />

    <ParallaxSection height="100vh" bgImage = {bgAbout}>
        <About />
    </ParallaxSection>

    <ParallaxSection height="100vh" bgImage = {bgSkills}>
        <Skills />
    </ParallaxSection>

    <ParallaxSection height="100vh">
        <Projects />
    </ParallaxSection>

    <ParallaxSection height="100vh">
        <Contact />
    </ParallaxSection>

    <Footer />
  </ThemeProvider>
  );
};

export default Home;
