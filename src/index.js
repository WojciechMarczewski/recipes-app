import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider, createTheme } from '@mui/material/styles';




export const themeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#da6e20',
		},
		secondary: {
			main: '#2d1a24',
		},
	},



};

const theme = createTheme(themeOptions);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</React.StrictMode>
);


