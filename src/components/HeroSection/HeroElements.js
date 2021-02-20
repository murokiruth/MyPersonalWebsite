import styled from 'styled-components';

export const HeroCont = styled.div`
	background: #000;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0 30px;
	height: 800px;
	position: relative;
	z-index: 1;
`;

export const HeroBg = styled.div`
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	width: 100%auto;
	height: 100%;
	overflow: hidden;
`;

export const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
	background: yellow;
`;

export const HeroContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	padding: 8px 24px;
	color: #fff;
	/* font-family:; */
`;

export const HeroH1 = styled.h1`
	text-transform: uppercase;
	font-size: 20px;
`;

export const HeroP = styled.p``;
