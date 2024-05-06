import {
	OrbitControls,
	Stage,
} from "@react-three/drei";
import { Hall } from "./Hall";
export const Experience = ({ arg }) => {
	
	return (
		<>
			<Stage environment="city" intensity={0.5}>
				<OrbitControls
					makeDefault
					minPolarAngle={Math.PI / 4}
					maxPolarAngle={Math.PI / 2}
					minDistance={1}
					maxDistance={2}
					minAzimuthAngle={-Math.PI / 4}
					maxAzimuthAngle={Math.PI / 4}
				/>
				<Hall />
			</Stage>
			
		</>
	);
};
