import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const ProjectsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const ProjectCard = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  color: ${(props) => props.theme.colors.background};
`;