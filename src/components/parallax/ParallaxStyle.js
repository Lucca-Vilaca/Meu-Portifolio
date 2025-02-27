import styled from "styled-components";

export const ParallaxWrapper = styled.div`
  position: relative;
  height: ${(props) => props.height || "100vh"};
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const ParallaxContent = styled.div`
  position: relative;
  transform: translateY(${(props) => props.$offsetY}px);  /* Corrigido: adicionando "$" */
  transition: transform 0.1s ease-out;
  text-align: center;
  color: ${(props) => props.theme.colors.primary};
`;
