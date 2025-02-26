import {Skill,SkillsContainer, Title, Section} from "./SkillsStyle";

const Skills = () => {
  return (
    <Section>
      <Title>Minhas Habilidades</Title>
      <SkillsContainer>
        <Skill>React</Skill>
        <Skill>JavaScript</Skill>
        <Skill>Styled-Components</Skill>
        <Skill>Figma</Skill>
        <Skill>Photoshop</Skill>
      </SkillsContainer>
    </Section>
  );
};

export default Skills;