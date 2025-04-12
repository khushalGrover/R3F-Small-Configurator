import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "./components/Experience";
import { useCustomization } from "./constants/Customization";
import "./App.css";

function App() {
	const {
		setObjectCode,
		mode,
	} = useCustomization();

	useEffect(() => {
		console.log("current mode is:", mode);
	}, [mode]);

	return (
		<>
			<div className="flex flex-col md:flex-row h-dvh w-full items-center justify-center relative bg-[#2c2e19]">
				<div className={"w-full h-full"}>
					<Canvas
						shadows
						camera={{ position: [0, 0, 60], fov: 35 }}
						className="canvas"
					>
						<color attach="background" args={["#2c2e19"]} />
						<fog attach="fog" args={["#303030", 0, 30]} />
						<Experience />
					</Canvas>
					<Loader />
				</div>
			</div>
		</>
	);
}

export default App;
