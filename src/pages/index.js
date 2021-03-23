import React, { useState } from 'react';
import Header from '../components/HeaderSection';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';

const Home = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<Header toggle={toggle} />
			<HeroSection />
			<AboutSection />
			<ProjectSection />
			<ContactSection />
		</>
	);
};

export default Home;
