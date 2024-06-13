import { AppBar, Typography } from "@mui/material";

export function Header(){
	return(
		<div>
			<AppBar >
				<Typography variant="h5">Recipe Finder</Typography>
			</AppBar>
		</div>
	);
}