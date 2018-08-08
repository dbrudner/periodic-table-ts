import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import Quinn from "./quinn";

export default () => (
	<div>
		<ThemeProvider theme={theme}>
			<Quinn />
		</ThemeProvider>
	</div>
);
