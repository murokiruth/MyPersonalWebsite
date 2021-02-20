import React from 'react';
import { ProjectCont, ProjectWrapper, ProjectCard, ProjectFace, ProjectH2, ProjectP } from './ProjectElements';
// import { ProjectItemOne, ProjectItemTwo, ProjectItemThree } from './Data';

const ProjectSection = ({ id, heading, description }) => {
	return (
		<>
			<ProjectCont>
				<ProjectWrapper>
					<ProjectCard id={id}>
						<ProjectFace></ProjectFace>
						<ProjectH2>{heading}</ProjectH2>
						<ProjectP>{description}</ProjectP>
					</ProjectCard>

					<ProjectCard id={id}>
						<ProjectFace></ProjectFace>
						<ProjectH2>{heading}</ProjectH2>
						<ProjectP>{description}</ProjectP>
					</ProjectCard>

					<ProjectCard id={id}>
						<ProjectFace></ProjectFace>
						<ProjectH2>{heading}</ProjectH2>
						<ProjectP>{description}</ProjectP>
					</ProjectCard>
				</ProjectWrapper>
			</ProjectCont>
		</>
	);
};

export default ProjectSection;

// {...ProjectItemOne} {...ProjectItemTwo} {...ProjectItemThree}
