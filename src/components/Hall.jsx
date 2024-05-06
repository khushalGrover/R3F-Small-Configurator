import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { PivotControls } from "./pivotControls";
import { InteractionUI } from "./InteractionUI";
import { Card } from "./Card";
import { useCustomization } from "../constants/Customization";

export function Hall(props) {
	const { nodes, materials } = useGLTF("./models/sofaSet.gltf");
	const { focusObj, setFocusObj, mode } = useCustomization();

	return (
		<group {...props} dispose={null} rotation={[0, Math.PI / 2, 0]}>
			{/* table */}
			<PivotControls
				visible={true}
				activeAxes={[true, false, true]}
				disableSliders={mode === "tablemove" ? false : true}
				disableRotations={mode === "tablerot" ? false : true}
				disableAxes={true}
				anchor={[0, 1.1, 0]}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={0.5}
				castShadow={false}
			>
				<group position={[-0.004, 0.222, 0.219]} castShadow={false}>
					{mode === "view" && <InteractionUI target="table" />}
					{focusObj.target === "table" && <Card />}
					<mesh
						geometry={nodes.Material2183.geometry}
						material={materials.Pale_lancelot_oak_PBR}
						castShadow={false}
					/>
					<mesh
						geometry={nodes.Material2183_1.geometry}
						material={materials.material_12}
					/>
				</group>
			</PivotControls>
			{/* <mesh
				geometry={nodes["H-Pic-4"].geometry}
				material={materials.Summer_Evening}
				position={[2.764, 1.644, -0.337]}
			/>
			<mesh
				geometry={nodes["H-Pic-2"].geometry}
				material={materials.House_With_A_Yellow_Seat}
				position={[2.764, 3.085, -0.337]}
			/>
			<mesh
				geometry={nodes["H-Pic-1"].geometry}
				material={materials["Mid_Century_-_Fallingwater-final"]}
				position={[2.764, 3.085, -1.918]}
			/>
			<mesh
				geometry={nodes["H-Pic-3"].geometry}
				material={materials["Mid_Century_-Paraty-House-Brazil"]}
				position={[2.764, 1.644, -1.918]}
			/> */}

			{/* sofa 1 */}
			<PivotControls
				visible={true}
				activeAxes={[true, false, true]}
				disableSliders={mode === "sofa1move" ? false : true}
				disableRotations={mode === "sofa1rot" ? false : true}
				disableAxes={true}
				anchor={[0, 1.1, 0]}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={0.5}
				castShadow={false}
			>
				<group
					position={[-0.548, 0.289, -1.039]}
					rotation={[0, -0.627, 0]}
				>
					{mode === "view" &&<InteractionUI target="sofa1" />}
					{focusObj.target === "sofa1" && <Card />}
					<mesh
						geometry={nodes.Material2546.geometry}
						material={materials.Pale_lancelot_oak_PBR}
					/>
					<mesh
						geometry={nodes.Material2546_1.geometry}
						material={materials.PDM_Leather_BandB_AC_Lounge_2}
					/>
				</group>
			</PivotControls>

			{/* sofa 2 */}
			<PivotControls
				visible={true}
				activeAxes={[true, false, true]}
				disableSliders={mode === "sofa2move" ? false : true}
				disableAxes={true}
				disableRotations={mode === "sofa2rot" ? false : true}
				anchor={[0, 1.1, 0]}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={0.5}
				castShadow={false}
			>
				<group
					position={[-0.645, 0.289, 1.385]}
					rotation={[0, -0.627, 0]}
				>
					{mode === "view" &&<InteractionUI target="sofa2" />}
					{focusObj.target === "sofa2" && <Card />}

					<mesh
						geometry={nodes.Material2006.geometry}
						material={materials.Pale_lancelot_oak_PBR}
					/>
					<mesh
						geometry={nodes.Material2006_1.geometry}
						material={materials.PDM_Leather_BandB_AC_Lounge_2}
					/>
				</group>
			</PivotControls>

			{/* sofa 3 */}
			<PivotControls
				visible={true}
				activeAxes={[true, false, true]}
				disableSliders={mode === "sofa3move" ? false : true}
				disableAxes={true}
				anchor={[0, 1.1, 0]}
				disableRotations={mode === "sofa3rot" ? false : true}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={0.5}
				castShadow={false}
			>
				<group
					position={[0.814, 0.289, 1.279]}
					rotation={[0, -0.627, 0]}
				>
					{mode === "view" &&<InteractionUI target="sofa3" />}
					{focusObj.target === "sofa3" && <Card />}
					<mesh
						geometry={nodes.Material2007.geometry}
						material={materials.Pale_lancelot_oak_PBR}
					/>
					<mesh
						geometry={nodes.Material2007_1.geometry}
						material={materials.PDM_Leather_BandB_AC_Lounge_2}
					/>
				</group>
			</PivotControls>

			<PivotControls
				visible={true}
				activeAxes={[true, false, true]}
				disableSliders={mode === "sofa4move" ? false : true}
				disableAxes={true}
				anchor={[0, 1.1, 0]}
				disableRotations={mode === "sofa4rot" ? false : true}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={0.5}
				castShadow={false}
			>
				<group
					position={[0.593, 0.289, -1.039]}
					rotation={[0, -0.627, 0]}
				>
					{mode === "view" && <InteractionUI target="sofa4" />}
					{focusObj.target === "sofa4" && <Card />}
					<mesh
						geometry={nodes.Material2009.geometry}
						material={materials.Pale_lancelot_oak_PBR}
					/>
					<mesh
						geometry={nodes.Material2009_1.geometry}
						material={materials.PDM_Leather_BandB_AC_Lounge_2}
					/>
				</group>
			</PivotControls>

			<PivotControls
				visible={true}
				activeAxes={[true, true, false]}
				disableSliders={mode === "picmove" ? false : true}
				disableRotations={true}
				disableAxes={true}
				anchor={[0, 1.3, 1.3]}
				rotation={[Math.PI, -Math.PI / 2, 0]}
				scale={0.5}
			>
				<group position={[2.76, 1.646, -0.335]}>
					{mode === "view" && <InteractionUI target="pic" />}
					{focusObj.target === "pic" && <Card />}
					<mesh
						geometry={nodes.Material2026.geometry}
						material={materials.material}
					/>
					<mesh
						geometry={nodes.Material2026_1.geometry}
						material={materials.Color_008}
					/>
					<mesh
						geometry={nodes["H-Pic-4"].geometry}
						material={materials.Summer_Evening}
					/>
				</group>
			</PivotControls>
		</group>
	);
}

useGLTF.preload("./models/sofaSet.gltf");
