<!--
Author: chankruze (chankruze@geekofia.in)
Created: Sun Nov 29 2020 08:09:23 GMT+0530 (India Standard Time)

Copyright (c) Geekofia 2020 and beyond
-->

Some of my personal (and hopefully useful) React hooks to speed-up project development.

## 🎣 Hooks

-   useInputText
-   useInputFloat
-   useInputCheckBox
-   useInputSelect
-   useLocalStorage

## Installation

```bash
# with npm
npm i geekofia-hooks

# with yarn
yarn add geekofia-hooks
```

## Usage

### `useInputText`

```js
// import
import { useInputText } from 'geekofia-hooks';

// component
const App = () => {
	// init hook (array destructuring)
	// default value: string
	const [textVal, bindTextVal, resetTextVal] = useInputText('default value');

	return (
		<div>
			{/* bind the useInputText hook */}
			<input type="text" {...bindTest} />
		</div>
	);
};
```

### `useInputFloat` (to store Int, Float)

```js
// import
import { useInputFloat } from 'geekofia-hooks';

// component
const App = () => {
	// init hook (array destructuring)
	// default value: number
	const [floatVal, bindFloatVal, resetFloatVal] = useInputFloat(5.0);

	return (
		<div>
			{/* bind the useInputFloat hook */}
			<input type="number" {...bindFloatVal} />
		</div>
	);
};
```

### `useInputCheckBox`

```js
// import
import { useInputCheckBox } from 'geekofia-hooks';

// component
const App = () => {
	// init hook (array destructuring)
	// default value: boolean (checked state)
	const [checkBox, bindCheckBox, resetCheckBox] = useInputCheckBox(true);

	return (
		<div>
			{/* bind the useInputCheckBox hook */}
			<input type="checkbox" {...bindCheckBox} />
		</div>
	);
};
```

### `useInputSelect`

```js
// import
import { useInputSelect } from 'geekofia-hooks';

// component
const App = () => {
	// init hook (array destructuring)
	// default value: boolean (checked state)
	const [options, bindOptions, resetOptions] = useInputSelect(
		'default-option-value'
	);

	return (
		<div>
			{/* bind the useInputSelect hook */}
			<select type="text" {...bindOptions}>
				<option value="val1">1st option</option>
				<option value="val2">2nd option</option>
				...
				<option value="valn">nth option</option>
			</select>
		</div>
	);
};
```

### `useLocalStorage`

```js
// import
import { useLocalStorage } from 'geekofia-hooks';

// component
const App = () => {
	// init hook (array destructuring)
	const [fontSize, setFontSize] = useLocalStorage('font_size', 16);

	return (
		<div>
			{/* bind the useLocalStorage hook */}
			<input
				type="number"
				value={fontSize}
				onChange={(e) => setFontSize(e.target.value)}
			/>
		</div>
	);
};
```
