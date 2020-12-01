<!--
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 29 2020 08:09:23 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
-->

Some of my personal (and hopefully useful) React hooks to speed-up project development.

## ⚛️ Components

-   Floating Navbar

## Installation

```bash
# with npm
npm i geekofia-components

# with yarn
yarn add geekofia-components
```

## Usage

### `Floating Navbar`

```js
//////////////////
// NavLinks.js //
////////////////
import React from 'react';
import { MdHome, MdSearch, MdInfo } from 'react-icons/md';
import { NavLink } from 'react-router-dom';

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
```

```js
//////////////
// App.jsx //
////////////
import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import floating navbar
import { FloatingNavbar } from 'geekofia-components';
// import nav menu items
import { links } from './NavLinks';
// component imports
import Search from './Search';
import Home from './Home';
import About from './About';

// component
const App = () => {
	// dark theme state (boolean)
	// uses geekofia-hooks (can use usestate)
	const [darkTheme, bindDarkTheme] = useInputCheckBox(false);
	// active menu state
	const [activeMenu, setActiveMenu] = useState(null);

	return (
		<BrowserRouter>
			<div>
				<FloatingNavbar
					isDarkTheme={darkTheme}
					navLinks={links}
					activeMenu={activeMenu}
					setActiveMenu={setActiveMenu}
				/>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/about" component={About} />
				</Switch>
			</div>
		</BrowserRouter>
	);
};
```
