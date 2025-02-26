import {Nav, Title, ThemeButton} from "./NavbarStyle";

const Navbar = ({ toggleTheme }) => {
  return (
    <Nav>
      <Title>Portfólio</Title>
      <ThemeButton onClick={toggleTheme}>Alternar Tema</ThemeButton>
    </Nav>
  );
};

export default Navbar;