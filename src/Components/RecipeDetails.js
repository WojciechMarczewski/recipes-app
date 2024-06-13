import { PieChart } from '@mui/x-charts/PieChart';
import { Box, Chip, Container, Stack, Typography } from "@mui/material";

export function RecipeDetails({ selectedRecipe }) {

	const carbs = selectedRecipe ? Math.trunc(selectedRecipe.totalNutrients.CHOCDF.quantity) : 0;
	const fats = selectedRecipe ? Math.trunc(selectedRecipe.totalNutrients.FAT.quantity) : 0;
	const proteins = selectedRecipe ? Math.trunc(selectedRecipe.totalNutrients.PROCNT.quantity) : 0;
	const totalNutrients = carbs + fats + proteins;

	const getArcLabel = (params, TOTAL) => {
		const percent = params.value / TOTAL;
		return `${(percent * 100).toFixed(0)}%`;
	};

	return (
		<Container maxWidth="md">
			<Typography className="recipeName" variant="h4" align="center">
				{selectedRecipe ? selectedRecipe.label : ""}
			</Typography>
			<Box>
				<Stack className="recipeCuisinesList" alignItems="center" justifyContent="center" direction="column">
					{selectedRecipe && selectedRecipe.cuisineType && selectedRecipe.cuisineType.length > 0 ? (
						selectedRecipe.cuisineType.map((cuisine, index) => (
							<Typography key={index} color="GrayText" variant="h5">
								Cuisine: {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
							</Typography>
						))
					) : null}
				</Stack>
			</Box>
			<Typography className="nutriLabel" marginTop={2} variant="h6" align="center">
				Nutritional Information
			</Typography>

			{selectedRecipe && selectedRecipe.totalNutrients ? (
				<Box className="nutriChartBox" borderRadius={5} flexDirection="row" display="flex" boxShadow={1}>
					<PieChart
						className="nutriChart"
						series={[
							{
								arcLabel: (params) => getArcLabel(params, totalNutrients),
								arcLabelRadius: 100,
								data: [
									{ id: "Carbs", value: carbs, label: "Carbs", color: "#80B683" },
									{ id: "Fat", value: fats, label: "Fat", color: "#FCF08D" },
									{ id: "Protein", value: proteins, label: "Protein", color: "#71AADC" },
								],
								outerRadius: 80,
								innerRadius: 20,
								paddingAngle: 2,
							},
						]}
						width={200}
						height={300}
						margin={{ top: -50, bottom: 5, left: 5, right: 5 }}
						slotProps={{
							legend: {
								direction: "row",
								position: { vertical: "bottom", horizontal: "middle" },
								padding: 0,
								labelStyle: { fontSize: 14 },
							},
						}}
					/>
				</Box>
			) : null}

			<Typography className="ingrLabel" marginTop={1} align="center" variant="h6">
				Ingredients ({selectedRecipe ? Math.trunc(selectedRecipe.totalWeight) : ""}g)
			</Typography>
			<Box className="ingrBox" borderRadius={5} marginTop={1} marginBottom={1} boxShadow={1}>
				{selectedRecipe && selectedRecipe.ingredientLines && selectedRecipe.ingredientLines.length > 0 ? (
					<Stack className="ingrList" alignItems="center" justifyContent="center" spacing={1}>
						{selectedRecipe.ingredientLines.map((ingredient, index) => (
							<Typography key={index} variant="body2">
								{ingredient}
							</Typography>
						))}
					</Stack>
				) : null}
			</Box>
			<Box className="dietBox" marginTop={1} marginBottom={1}>
				{selectedRecipe && selectedRecipe.dietLabels && selectedRecipe.dietLabels.length > 0 ? (
					<Stack className="dietList" alignItems="center" justifyContent="center" spacing={1} direction="row">
						{selectedRecipe.dietLabels.map((diet, index) => (
							<Chip color="primary" key={index} label={diet} />
						))}
					</Stack>
				) : null}
			</Box>
		</Container>
	);
}