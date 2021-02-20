import React from 'react';
import { AboutCont, AboutWrapper, AboutRow, Column1, Column2, ImgWrap, Img, AboutH1, AboutP } from './AboutElements';
import aboutImg from '../../images/imageA.svg';

const About = () => {
	return (
		<>
			<AboutCont>
				<AboutWrapper>
					<AboutRow>
						<Column1>
							<ImgWrap>
								<Img src={aboutImg} alt='image' />
							</ImgWrap>
						</Column1>
						<Column2>
							<AboutH1>Sonnie Muroki Profile</AboutH1>
							<AboutP>
								I am a freelance developer with --- years of experince. Ut minim quis nostrud exercitation ullamco
								laboris et eiusmod tempor incididun dolore magna nostrud exercitatioI am always working on improving my
								skills, one project at a time
							</AboutP>
						</Column2>
					</AboutRow>
				</AboutWrapper>
			</AboutCont>
		</>
	);
};

export default About;
