export interface element {
	name: string;
	appearance: string;
	atomic_mass: number;
	boil: number;
	category: string;
	color: null;
	density: number;
	discovered_by: string;
	melt: number;
	molar_heat: number;
	named_by: string;
	number: number;
	period: number;
	phase: string;
	source: string;
	spectral_img: string;
	symbol: string;
	xpos: number;
	ypos: number;
	shells: number[];
	quantity: number;
}

export interface theme {
	category: string;
	theme: {
		color1: string;
		color3: string;
		color4: string;
		color2: string;
		color5: string;
		color6: string;
		color7: string;
		color8: string;
	};
}
