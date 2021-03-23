import styled from 'styled-components';

export const Section = styled.div`
	width: 100%;
	height: 100%;
	background: #05121b;
	justify-content: center;
	align-items: center;
`;

export const ProjectCont = styled.div`
	height: 700px;
	display: grid;
	grid-gap: 15px;
	padding: 15px;
	grid-template-columns: 1fr 1fr 1fr;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 770px) {
		grid-template-columns: 1fr;
	}
`;

export const ProjectWrapper = styled.div`
	margin-bottom: 30px;
	text-decoration: none;
`;

export const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: #fff;
	min-height: 500px;
	width: 80%auto;
	border-radius: 10px;
	padding: 25px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;

export const ProjectFace = styled.img`
	width: 300px;
`;
export const ProjectH1 = styled.h1`
	color: #fff;
	padding-top: 40px;
	font-family: 'Cinzel', serif;
	text-align: center;
	margin: 0px;
`;
export const ProjectH2 = styled.h2``;
export const ProjectH3 = styled.h3``;
export const ProjectP = styled.p``;
export const Button = styled.button``;
