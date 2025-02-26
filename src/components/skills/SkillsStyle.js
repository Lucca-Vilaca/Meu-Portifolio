import styled from "styled-components";

export const Section = styled.section`
  padding: 60px 20px;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  color: ${(props) => props.theme.colors.primary};
`;

export const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
`;

export const Skill = styled.div`
  background: ${(props) => props.theme.colors.secondary};
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.background};
`;
