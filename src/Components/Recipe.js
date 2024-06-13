import { Box, ListItemText, Grid, Typography } from "@mui/material";
export function Recipe({ recipe }) {


	return (

		<Box sx={{ border: "1px solid grey", width: "100%", height: "100%", display: "flex", flexDirection: "column" }}>
			<img src={recipe.image} alt={recipe.label} style={{ width: "100%", height: "auto", objectFit: "cover" }} />
			<Box display="flex" justifyContent="center" >
				<Typography align="center" variant="h6" noWrap >{recipe.label}</Typography>
			</Box>
			<Grid container orientation="horizontal" >
				<ListItemText primary={`Calories: ${Math.trunc(recipe.calories)}`} />
				<ListItemText primary={`Ingredients: ${(recipe.ingredients).length}`} />
			</Grid>
		</Box >

	)
}