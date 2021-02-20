import React from 'react';
import Header from '../components/HeaderSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import { ProjectCard } from '../components/ProjectSection/ProjectElements';
import { ProjectItemOne, ProjectItemTwo, ProjectItemThree } from '../components/ProjectSection/Data';

const Home = () => {
	return (
		<>
			<Header />
			<HeroSection />
			<AboutSection />
			<ProjectSection>
				<ProjectCard {...ProjectItemOne} />
				<ProjectCard {...ProjectItemTwo} />
				<ProjectCard {...ProjectItemThree} />
			</ProjectSection>
		</>
	);
};

export default Home;
