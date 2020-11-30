/*
Author: chankruze (chankruze@geekofia.in)
Created: Tue Nov 24 2020 07:04:05 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useInputCheckBox } from 'geekofia-hooks';
import { FloatingNavbar } from '../../../index';
import { links } from './NavLinks';

import styles from './App.module.sass';
import Search from './Search';
import Home from './Home';
import About from './About';

const App = () => {
	const [darkTheme, bindDarkTheme] = useInputCheckBox(false);
	const [activeMenu, setActiveMenu] = useState(null);

	return (
		<BrowserRouter>
			<div className={styles.app}>
				<div className={styles.option}>
					<p>Dark Nav</p>
					<input type="checkbox" {...bindDarkTheme} />
				</div>

				<FloatingNavbar
					theme={darkTheme ? 'dark' : ''}
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

export default App;
