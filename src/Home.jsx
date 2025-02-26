import Header from "./Components/header/Header";
import Skills from "./Components/skills/Skills";
import Projects from "./Components/projects/Projects";
import About from "./Components/about/About";
import Contact from "./Components/contact/Contact";
import Footer from "./Components/footer/Footer";
import MyGlobalStyles from "./styles/GlobalStyles";


function Home() {
  return (
    <div>
      
      <MyGlobalStyles />
      <Header />
      <Skills />
      <Projects />
      <About />
      <Contact />
      <Footer />

    </div>
  );
}

export default Home;
