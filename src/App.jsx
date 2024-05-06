import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { useCustomization } from "./constants/Customization";
import "./App.css";

function App() {
	const {
		loc,
		setLoc,
		objectCode,
		setObjectCode,
		targetPos,
		setTargetPos,
		focusObj,
		setFocusObj,
		mode,
	} = useCustomization();

	function handleObjectCodeUpdateAtIndex(tIndex, value, objectCode) {
		// in case 3 and case4, value is incremented by 1 bcz the value starts from 1 not 0 , bcz none option is not included for legs and seat
		switch (tIndex) {
			case 0:
				setObjectCode(
					value + objectCode.charAt(1) + objectCode.slice(2)
				);
				break;
			case 1:
				setObjectCode(
					objectCode.charAt(0) + value + objectCode.slice(2)
				);

				break;
			case 2:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						value +
						objectCode.slice(3)
				);

				break;
			case 3:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						(value + 1) +
						objectCode.slice(4)
				);
				break;
			case 4:
				setObjectCode(
					objectCode.charAt(0) +
						objectCode.charAt(1) +
						objectCode.charAt(2) +
						objectCode.charAt(3) +
						(value + 1) +
						objectCode.slice(5)
				);
				break;
		}
	}

	useEffect(() => {
		console.log("current mode is:", mode);
	}, [mode]);

	return (
		<>
			<div className="flex flex-col md:flex-row h-dvh w-full items-center justify-center relative bg-[#191920]">
				<div className={"w-full h-full"}>
					<Canvas
						shadows
						camera={{ position: [0, 0, 60], fov: 35 }}
						className="canvas"
					>
						<color attach="background" args={["#191920"]} />
						<fog attach="fog" args={["#191920", 0, 30]} />
						<Experience />
					</Canvas>
					<Loader />
				</div>
			</div>
		</>
	);
}

export default App;
