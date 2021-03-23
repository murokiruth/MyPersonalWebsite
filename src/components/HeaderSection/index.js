import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGit } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
	Head,
	HeaderCont,
	Logo,
	LogoIcon,
	SocialIcons,
	SocialIconLink,
	NavMenu,
	NavItem,
	NavLink,
} from './HeaderElements.js';

const Header = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false);

	const changeNav = () => {
		if (window.scrollY >= 80) {
			setScrollNav(true);
		} else {
			setScrollNav(false);
		}
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
	}, []);

	const toggleHome = () => {
		scroll.scrollToTop();
	};

	return (
		<>
			<Head scrollNav={scrollNav}>
				<HeaderCont>
					<Logo to='/'>
						<LogoIcon onClick={toggleHome} />
					</Logo>
					<NavMenu>
						<NavItem>
							<NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								About Me
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Projects
							</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>
								Contact Me
							</NavLink>
						</NavItem>
					</NavMenu>
					<SocialIcons>
						<SocialIconLink href='https://github.com/murokiruth' target='_blank' aria-label='Git'>
							<FaGit />
						</SocialIconLink>
						<SocialIconLink href='https://www.linkedin.com/in/ruth-m-313890161/' target='_blank' aria-label='Linkedin'>
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</HeaderCont>
			</Head>
		</>
	);
};

export default Header;
