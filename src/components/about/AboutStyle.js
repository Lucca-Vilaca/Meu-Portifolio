import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const Paragraph = styled.p`
  font-size: 1.2rem;
  max-width: 800px;
  margin: 20px auto;
`;
