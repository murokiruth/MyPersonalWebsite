import React from 'react';
import Video from '../../videos/video1.mp4';
import { HeroBg, HeroCont, VideoBg, HeroContent, HeroH1, HeroP } from './HeroElements';

const HeroSection = () => {
	return (
		<>
			<HeroCont>
				<HeroBg>
					<VideoBg autoPlay loop muted src={Video} type='video/mp4' />
				</HeroBg>
				<HeroContent>
					<HeroH1>Hello and Welcome to my personal website</HeroH1>
					<HeroP>
						{' '}
						I'm Ruth Muroki, i am a Web Developer, i am a Web Developer, i am a Web Developer, i am a Web Developer, .
					</HeroP>
				</HeroContent>
			</HeroCont>
		</>
	);
};

export default HeroSection;
