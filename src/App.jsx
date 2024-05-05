import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Loader } from "@react-three/drei";
import { Experience } from "./components/Experience";
import "./App.css";

function App() {
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
