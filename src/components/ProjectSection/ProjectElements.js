import styled from 'styled-components';

export const ProjectCont = styled.div`
	height: 700px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: green;

	@media screen and (max-width: 770px) {
		height: 1400px;
	}

	@media screen and (max-width: 480px) {
		height: 1400px;
	}
`;

export const ProjectWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 20px;
	padding: 0 50px;
	align-items: center;
	margin: 0 auto;
	max-width: 1000px;

	@media screen and (max-width: 1000px) {
		grid-template-columns: 1fr 1fr;
	}

	@media screen and (max-width: 770px) {
		grid-template-columns: 1fr;
	}
`;

export const ProjectCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	background: #fff;
	min-height: 400px;
	border-radius: 10px;
	padding: 25px;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.02);
		transition: all 0.2s ease-in-out;
		cursor: pointer;
	}
`;
export const ProjectFace = styled.img``;
export const ProjectH2 = styled.h2``;
export const ProjectP = styled.p``;
