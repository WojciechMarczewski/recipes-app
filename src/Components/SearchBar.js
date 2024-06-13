import { Box, TextField, InputAdornment, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"
import { useState, useEffect } from "react";
import { RecipeList } from "./RecipeList";
export function SearchBar() {
	const [textInput, setTextInput] = useState("chicken");
	const [recipes, setRecipes] = useState([]);

	const performQuery = async () => {
		var app_id = process.env.REACT_APP_APP_ID;
		var app_key = process.env.REACT_APP_APP_KEY;
		const response = await fetch(`https://api.edamam.com/api/recipes/v2?q=${textInput}&type=public&app_id=${app_id}&app_key=${app_key}`)
		const data = await response.json();
		setRecipes(data.hits.map(hit => hit.recipe));
	}

	const handleTextInputChange = event => {
		setTextInput(event.target.value);
	}
	useEffect(() => {
		performQuery();
		setTextInput("");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const onKeyDown = (e) => {
		if (e.key === 'Enter') {
			performQuery();
		}
	}
	return (
		<Box >
			<TextField fullWidth InputProps={{
				endAdornment: (<InputAdornment position="end"><IconButton onClick={performQuery}>
					<SearchIcon />
				</IconButton >
				</InputAdornment>
				),
			}} value={textInput} onChange={handleTextInputChange} onKeyDown={onKeyDown} style={{ marginBottom: '20px' }} />
			<RecipeList recipes={recipes} />
		</Box>

	);

} 
