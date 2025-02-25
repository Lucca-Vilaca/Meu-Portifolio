import "../styles/Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>Meu Portfólio</h1>
      <nav>
        <a href="#skills">Habilidades</a>
        <a href="#projects">Projetos</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
};

export default Header;
