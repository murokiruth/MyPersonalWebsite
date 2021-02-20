import React from 'react';
import { FaLinkedin, FaGit } from 'react-icons/fa';
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

const Header = () => {
	return (
		<>
			<Head>
				<HeaderCont>
					<Logo to='/'>
						<LogoIcon />
					</Logo>
					<NavMenu>
						<NavItem>
							<NavLink to='about'>About Me</NavLink>
						</NavItem>
						<NavItem>
							<NavLink to='projects'>Projects</NavLink>
						</NavItem>
					</NavMenu>
					<SocialIcons>
						<SocialIconLink href='https://www.git.com/' target='_blank' aria-label='Git'>
							<FaGit />
						</SocialIconLink>
						<SocialIconLink href='https://www.linkedin.com/' target='_blank' aria-label='Linkedin'>
							<FaLinkedin />
						</SocialIconLink>
					</SocialIcons>
				</HeaderCont>
			</Head>
		</>
	);
};

export default Header;
