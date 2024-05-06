import { custom } from "../assets/icons";
import { Html } from "@react-three/drei";
import { useCustomization } from "../constants/Customization";

export const InteractionUI = (target) => {
	const {focusObj,
		setFocusObj,
	} = useCustomization();
	
	const handleFocus = (target) => {
		// console.log("target is:", target);
		setFocusObj(target);
	};

	return (
		<>
			<Html scale={1} distanceFactor={3} position={[0,0,0]}>
				<div
					className={"handle w-8 h-8 bg-black"}
					onClick={handleFocus.bind(this, target)}
				>
					<img
						className="handleIcon--active"
						src={custom}
						alt="handle Icon"
					/>
				</div>
			</Html>
		</>
	);
};
