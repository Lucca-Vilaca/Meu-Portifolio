import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #252525;
  color: #e0e0e0;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const NavList = styled.ul`
  display: flex;
  gap: 20px;
`;

export const NavItem = styled.li`
  font-size: 1rem;
  font-weight: bold;
  
  a {
    transition: color 0.3s;
    
    &:hover {
      color: #00bcd4;
    }
  }
`;
