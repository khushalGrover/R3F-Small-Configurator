import {
	OrbitControls,
	Stage,
	MeshReflectorMaterial,
	useTexture,
	Html,
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
			<Html scale={1} distanceFactor={4} position={[0.3, 0.3, 0.4]} >
				<div className="card subMenu">

					<div className="card__section__values two">
						<div className="item">
							<div className="item__label">option1</div>
						</div>
						<div className="item">
							<div className="item__label">option2</div>
						</div>
						<div className="item ">
							<div className="item__label">option3</div>
						</div>
						<div className="item">
							<div className="item__label">option4</div>
						</div>
					</div>
				</div>
			</Html>
			<Html scale={1} distanceFactor={3} position={[0, 0, 0]}>
				<div className="handle w-5 h-5 bg-red-600">
					<img
						className="handleIcon--active"
						src={cross}
						alt="handle Icon"
					/>
				</div>
				<div className="card">
					{/* <h1 className="card__section__title">Table</h1> */}

					<div className="card__section__values">
						<div className="item">
							<div className="item__dot">
								<img src={move} alt="moveImg" />
							</div>
						</div>
						<div className="item">
							<div className="item__dot">
								<img src={rotate2} alt="rotateImg" />
							</div>
						</div>
						<div className="item ">
							<div className="item__dot">
								{" "}
								<img src={texture} alt="textureImg" />
							</div>
						</div>
						<div className="item">
							<div className="item__dot">
								<img src={swap} alt="swapImg" />
							</div>
						</div>
					</div>
				</div>
			</Html>
		</>
	);

	function Card({ children, ...props }) {
		return (
			<>
				<Html scale={5} distanceFactor={5} position={[0, 2, 0]}>
					<div className="card">
						<h1 className="card__section__title">Table</h1>
						<div className="card__section__values">
							<div className="item">
								<div className="item__label">Move/Rotation</div>
							</div>
							<div className="item">
								<div className="item__label">Texture</div>
							</div>
							<div className="item">
								<div className="item__label">Model</div>
							</div>
						</div>
					</div>
				</Html>
			</>
		);
	}
};
