import React from "react";
import styled from "styled-components";
import getBgColor from "./get-bg-color";
import * as types from "./types";

interface elementContainerType extends types.element {
	smallScreen: boolean;
	category: string;
}

const ElementContainer = styled.div`
	border: 1px solid black;
	text-align: center;
	width: calc(100vw / 18 - 4px);
	height: calc(100vw / 18 - 4px);
	display: inline-block;
	margin: 1px;
	padding-top: ${(props: elementContainerType) =>
		props.smallScreen ? "2px" : "4px"};
	position: relative;
	background-color: ${(props: elementContainerType) => getBgColor(props)};
	color: ${(props: elementContainerType) =>
		props.category === "diatomic nonmetal" ? "white" : ""};
	cursor: pointer;
`;

type elementProps = {
	handleElementClick: ({}) => void;
	element: {
		number: number;
		symbol: string;
		atomic_mass: number;
	};
};

export default (props: elementProps) => {
	const width = window.innerWidth;

	const handleClick = () => {
		props.handleElementClick(props.element);
	};

	const getFontSize = () => {
		if (width > 1200) {
			return `calc(100vw/120)`;
		}
		return `calc(100vw/140)`;
	};

	const getLargeFontSize = () => {
		if (width > 1200) {
			return `calc(100vw/60)`;
		}
		return `calc(100vw/70)`;
	};

	const getMargin = () => {
		if (width > 1200) {
			return "5px";
		}

		return "2px";
	};

	return (
		<ElementContainer
			{...props.element}
			smallScreen={window.innerWidth < 1200}
			onClick={handleClick}
		>
			<div style={{ fontSize: getFontSize() }}>
				{props.element.number}
			</div>
			<div style={{ fontSize: getLargeFontSize() }}>
				{props.element.symbol}
			</div>
			<div style={{ fontSize: getFontSize() }}>
				{props.element.atomic_mass.toFixed(4)}
			</div>
		</ElementContainer>
	);
};
