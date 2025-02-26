import styled from "styled-components";

export const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
`;
