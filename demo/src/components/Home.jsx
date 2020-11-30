/*
Author: chankruze (chankruze@geekofia.in)
Created: Mon Nov 30 2020 15:55:42 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
*/

import React from 'react';

const Home = () => {
	console.log(`Home Rendred at ${new Date().toLocaleTimeString()}`);
	return <h1 style={{ background: 'red', color: 'white' }}>Home</h1>;
};

export default Home;
