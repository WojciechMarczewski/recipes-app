import './App.css';
import { Header } from './Components/Header';
import { SearchBar } from './Components/SearchBar';
import { Stack } from '@mui/material';

function App() {
	return (
		<div className="App">
			<Stack spacing={5}>
				<Header />
				<SearchBar />
			</Stack>
		</div>

	);
}

export default App;
