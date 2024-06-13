import { useState } from "react";
import { Box, ButtonBase, Dialog, Grid } from "@mui/material";
import { RecipeDetails } from "./RecipeDetails";
import { Recipe } from "./Recipe";

export function RecipeList({ recipes }) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [selectedRecipe, setSelectedRecipe] = useState(null);

	const showDetails = (recipe) => {
		setSelectedRecipe(recipe);
		setIsModalOpen(true);
	}

	const closeModal = () => {
		setIsModalOpen(false);
	}
	const handleMouseOver = (event) => {

		event.currentTarget.style.backgroundColor = '#f0f0f0';
		event.currentTarget.style.transition = '0.5s';
		event.currentTarget.style.opacity = "0.85";
	}

	const handleMouseOut = (event) => {
		event.currentTarget.style.backgroundColor = 'transparent';
		event.currentTarget.style.transition = '0.5s';
		event.currentTarget.style.opacity = "1";
	}
	return (
		<Box margin={2} alignContent="center">
			<Grid className="recipeList" container spacing={2}  >
				{recipes.map((recipe, index) => (
					<Grid item xs={12} sm={6} md={3} key={index} sx={{ borderRadius: "1", overflow: "hidden" }} >
						<Box onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOut} boxShadow={2} >
							<ButtonBase onClick={() => showDetails(recipe)} sx={{ width: "100%", height: "100%", display: "flex" }} >
								<Recipe recipe={recipe} />
							</ButtonBase>
						</Box>
					</Grid>
				))}
			</Grid>

			<Dialog className="recipeDetails" open={isModalOpen} onClose={closeModal} fullWidth sx={{ opacity: 0.98 }}
				PaperProps={{ sx: { borderRadius: "20px", background: "#F4F4F4" } }} >
				<RecipeDetails selectedRecipe={selectedRecipe} />
			</Dialog>
		</Box>
	);
}