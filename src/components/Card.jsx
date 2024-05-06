import { move, rotate2, texture, swap, cross } from "../assets/icons";
import { Html } from "@react-three/drei";
import { useCustomization } from "../constants/Customization";

export const Card = () => {
	const { focusObj, setFocusObj, setMode } = useCustomization();

	return (
		<>
			<Html
				scale={1}
				distanceFactor={focusObj.target == "pic" ? 7 : 5}
				position={[0, 0, 0]}
			>
				<div
					className="handle w-5 h-5 bg-red-600"
					onClick={() => {
						setFocusObj("");
						setMode("view");
					}}
				>
					<img
						className="handleIcon--active"
						src={cross}
						alt="handle Icon"
					/>
				</div>
				<div className="card">
					{/* <h1 className="card__section__title">Table</h1> */}

					<div className="card__section__values">
						<div
							className="item"
							onClick={() => {
								setMode(focusObj.target + "move");
							}}
						>
							<div className="item__dot">
								<img src={move} alt="moveImg" />
							</div>
						</div>
						{focusObj.target !== "pic" && <div
							className="item"
							onClick={() => {
								setMode(focusObj.target + "rot");
							}}
						>
							<div className="item__dot">
								<img src={rotate2} alt="rotateImg" />
							</div>
						</div>}
						{/* <div className="item ">
							<div className="item__dot">
								{" "}
								<img src={texture} alt="textureImg" />
							</div>
						</div>
						<div className="item">
							<div className="item__dot">
								<img src={swap} alt="swapImg" />
							</div>
						</div> */}
					</div>
				</div>
			</Html>

			{/* <Html scale={1} distanceFactor={4} position={[0, 1, 0]}>
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
            </Html> */}
		</>
	);
};
