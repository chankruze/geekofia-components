/*
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 29 2020 15:27:48 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react';
import classNames from 'classnames';

// css
import styles from './FloatingNavbar.module.css';

const FloatingNavbar = (props) => {
	const { className, theme, navLinks, activeMenu, setActiveMenu } = props;

	return (
		<div
			className={classNames(
				[styles.fnb_root],
				[styles[theme]],
				className
			)}
		>
			{navLinks &&
				navLinks.length > 0 &&
				navLinks.map(({ name, navLink }, index) => (
					<div
						key={`${index}-${name}`}
						className={classNames(
							[styles.fnb_menu_wrapper],
							[styles[theme]],
							{ [styles.active]: activeMenu === name }
						)}
						onClick={() => setActiveMenu(name)}
					>
						{navLink}
					</div>
				))}
		</div>
	);
};

export default FloatingNavbar;
