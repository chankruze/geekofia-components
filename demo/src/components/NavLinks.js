/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 30 2020 00:31:33 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react';
import { MdHome, MdSearch, MdInfo } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

export const links = [
	{
		name: 'Home',
		navLink: (
			<NavLink exact to="/">
				<MdHome size={40} />
			</NavLink>
		)
	},
	{
		name: 'Search',
		navLink: (
			<NavLink exact to="/search">
				<MdSearch size={40} />
			</NavLink>
		)
	},
	{
		name: 'Info',
		navLink: (
			<NavLink exact to="/about">
				<MdInfo size={40} />
			</NavLink>
		)
	}
];
