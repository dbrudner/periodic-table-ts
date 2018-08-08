import React from "react";
import * as types from "./types";

export default (props: { compound: types.element[] }) => {
	const { compound } = props;

	const renderCompoundName = () => {
		return compound.map((element: types.element) => {
			return (
				<span>
					{element.symbol}
					<sub>{element.quantity > 1 && element.quantity}</sub>
				</span>
			);
		});
	};

	const getMolarMass = () =>
		compound
			.reduce((acc: number, element: types.element) => {
				return acc + element.atomic_mass * element.quantity;
			}, 0)
			.toFixed(4);

	return (
		<div>
			Compound
			<div style={{ marginTop: "5px" }}>{renderCompoundName()}</div>
			<div>{getMolarMass()}</div>
		</div>
	);
};
