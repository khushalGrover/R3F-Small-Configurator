import { createContext, useContext, useState } from "react";

const sofaColors = [
	{
		color: "#683434",
		name: "brown",
	},
	{
		color: "#1a5e1a",
		name: "green",
	},
	{
		color: "#659994",
		name: "blue",
	},
	{
		color: "#896599",
		name: "mauve",
	},
	{
		color: "#ffa500",
		name: "orange",
	},
	{
		color: "#59555b",
		name: "grey",
	},
	{
		color: "#222222",
		name: "black",
	},
	{
		color: "#ececec",
		name: "white",
	},
];


const CustomizationContext = createContext({});

export const CustomizationProvider = (props) => {
	const [targetPos, setTargetPos] = useState([0,0,0])
	const [objectCode, setObjectCode] = useState("111");
	const [loc, setLoc] = useState(1);
	const [focusObj, setFocusObj] = useState(1);
	const [sofaColor, setSofaColor] = useState(sofaColors[0]);
	const [mode, setMode] = useState("view");
	


	const codeOBJ = {
		dSofa: parseInt(objectCode.charAt(0)), // Dnsofa
		dTable: parseInt(objectCode.charAt(1)), // Dntable
		dPic: parseInt(objectCode.charAt(2)), 
	};

	// console.log(codeOBJ, "!!! codeOBJ");
	return (
		<CustomizationContext.Provider
			value={{
				objectCode,
				setObjectCode,
				loc,
				setLoc,
				focusObj,
				setFocusObj,
				targetPos,
				setTargetPos,
				sofaColors,
				sofaColor,
				setSofaColor,

				mode,
				setMode,
				
				codeOBJ,
				
			}}
		>
			{props.children}
		</CustomizationContext.Provider>
	);
};

export const useCustomization = () => {
	const context = useContext(CustomizationContext);
	return context;
};
