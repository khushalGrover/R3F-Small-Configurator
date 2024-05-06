import {
	OrbitControls,
	Stage,
	MeshReflectorMaterial,
	useTexture,
} from "@react-three/drei";
import { Hall } from "./Hall";
import { move, rotate2, texture, swap, cross, check } from "../assets/icons";
export const Experience = ({ arg }) => {
	let textureMap = "1.jpg";

	const props = useTexture({
		map: textureMap,
	});
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
			<mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1.62, 0]}>
				<planeGeometry args={[100, 100]} />
				<MeshReflectorMaterial
					blur={[400, 400]}
					resolution={1024}
					mixBlur={0.5}
					mixStrength={10}
					reoughness={1}
					depthScale={1.2}
					minDepthThreshold={0.4}
					maxDepthThreshold={1.4}
					color="#101010"
					matalness={0.5}
				/>
			</mesh>
		</>
	);
};
