import styled from 'styled-components';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import LogoImg from '../../images/logoWhite.png';

export const Head = styled.nav`
	display: flex;
	background: ${({ scrollNav }) => (scrollNav ? '#008080' : 'transparent')};
	height: 80px;
	margin-top: -80px;
	align-items: center;
	justify-content: center;
	position: sticky;
	top: 0;
	z-index: 10;
`;

export const HeaderCont = styled.div`
	display: flex;
	height: 80px;
	width: 100%;
	justify-content: space-between;
	padding: 0 24px;
	z-index: 1;
	max-width: 1100px;
`;

export const Logo = styled(LinkRouter)`
	color: red;
	justify-self: flex-start;
	cursor: pointer;
	display: flex;
	align-items: center;
	margin-left: 24px;
`;

export const LogoIcon = styled.img`
	background-image: url(${LogoImg});
	height: 70px;
	width: 70px;
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	margin-right: 15px;
`;

export const SocialIcons = styled.div`
	display: flex;
	/* justify-content: space-between; */
	align-items: center;
	width: 240;
`;

export const SocialIconLink = styled.a`
	color: #fff;
	font-size: 24px;
	justify-content: space-between;
	margin-right: 10px;
`;

export const NavMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	text-align: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`;

export const NavItem = styled.li`
	height: 80px;
`;
export const NavLink = styled(LinkScroll)`
	color: #fff;
	font-size: 18px;
	display: flex;
	align-items: center;
	text-decoration: none;
	padding: 0 1rem;
	height: 100%;
	cursor: pointer;

	&.active {
		border-bottom: 3px solid #05e1cf;
	}
`;
