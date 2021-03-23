import React from 'react';
import { Data } from './Data';
import {
	ProjectCont,
	ProjectWrapper,
	ProjectCard,
	ProjectFace,
	ProjectH1,
	ProjectH2,
	ProjectH3,
	ProjectP,
	Section,
} from './ProjectElements';

const ProjectSection = () => {
	return (
		<>
			<Section>
				<ProjectH1> PROJECTS</ProjectH1>
				<ProjectCont id='projects'>
					{Data.map((item) => (
						<ProjectWrapper key={item.id}>
							<a href={item.URL} style={{ textDecoration: 'none' }} target='_blank' rel='noreferrer'>
								<ProjectCard>
									<ProjectFace src={item.img} />
									<ProjectH2>{item.title}</ProjectH2>
									<ProjectH3>{item.heading}</ProjectH3>
									<ProjectP>{item.description}</ProjectP>
								</ProjectCard>
							</a>
						</ProjectWrapper>
					))}
				</ProjectCont>
			</Section>
		</>
	);
};

export default ProjectSection;
