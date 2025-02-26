import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 30px;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const ThemeButton = styled.button`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.background};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background-color: ${(props) => props.theme.colors.highlight};
  }
`;