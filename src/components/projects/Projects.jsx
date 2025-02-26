import {Section, Title, ProjectsContainer, ProjectCard} from "./ProjectsStyle"

const Projects = () => {
  return (
    <Section>
      <Title>Meus Projetos</Title>
      <ProjectsContainer>
        <ProjectCard>Projeto 1</ProjectCard>
        <ProjectCard>Projeto 2</ProjectCard>
        <ProjectCard>Projeto 3</ProjectCard>
      </ProjectsContainer>
    </Section>
  );
};

export default Projects;