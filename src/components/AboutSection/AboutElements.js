import styled from 'styled-components';

export const AboutCont = styled.div`
	display: flex;
	height: 400px;
	flex-direction: column;
	align-items: center;
`;

export const AboutWrapper = styled.div`
	display: grid;
	z-index: 1;
	height: 500px;
	width: 100%;
	max-width: 1100px;
	margin-right: auto;
	margin-left: auto;
	padding: 0 24px;
	justify-content: center;
`;

export const AboutRow = styled.div`
	display: grid;
	align-items: center;
	grid-template-columns: 1fr 2fr;
	grid-gap: 20px;
`;

export const Column1 = styled.div`
	margin-bottom: 15px;
	padding: 0 15px;
`;

export const Column2 = styled.div`
	/* margin-bottom: 15px; */
	padding: 0 15px;
	margin: 30px;
	justify-content: center;
`;

export const ImgWrap = styled.div`
	max-width: 555px;
	height: 100%;
`;

export const Img = styled.img`
	width: 100%;
	margin: 0 0 10px 0;
	padding-right: 0;
`;

export const AboutH1 = styled.h1`
	margin-bottom: 24px;
`;

export const AboutP = styled.p`
	max-width: 440px;
	margin-bottom: 35px;
	font-size: 18px;
	line-height: 24px;
`;
