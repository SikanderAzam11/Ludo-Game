import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useGLTF } from "@react-three/drei";
import * as three from "three";
import gsap from "gsap";
import Green from "./GreenPlayer";
import Blue from "./BluePlayer";
import Red from "./RedPlayer";
import Yellow from "./YellowPlayer";
import { useSelector } from "react-redux";
const coords = new three.Vector2(-1, -1);
export const Model = (props) => {
  const model = useGLTF("./Ludo.glb");
  console.log(model);
  // console.log(location);

  const state = useSelector(state => state.switchPlay);
  console.log(state.activePlayer);
  

  return (
    <>
      <group {...props} dispose={null}>
        
      <Green model={model} active= {state.activePlayer}/> 
      <Blue model={model} active= {state.activePlayer}/>
      <Red model={model} active= {state.activePlayer}/>
      <Yellow model={model} active= {state.activePlayer}/>
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile21.geometry}
        material={model.materials.Derevo}
        position={[-3.02, 1.49, 11.25]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile27.geometry}
        material={model.materials.Derevo}
        position={[-11.24, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile12.geometry}
        material={model.materials.Stone}
        position={[8.2, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile13.geometry}
        material={model.materials.Stone}
        position={[5.38, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile19.geometry}
        material={model.materials.Stone}
        position={[-0.21, 1.49, 14.13]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile24.geometry}
        material={model.materials.Stone}
        position={[-3.02, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile26.geometry}
        material={model.materials.Stone}
        position={[-8.41, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile32.geometry}
        material={model.materials.Stone}
        position={[-8.57, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile38.geometry}
        material={model.materials.Stone}
        position={[-2.93, 1.49, -14.2]}
        scale={[1.1, 0.05, 1]}
      />
      
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile39.geometry}
        material={model.materials.Stone}
        position={[-0.17, 1.49, -14.2]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile5.geometry}
        material={model.materials.Stone}
        position={[5.22, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile6.geometry}
        material={model.materials.Stone}
        position={[8.04, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile30.geometry}
        material={model.materials.Stone}
        position={[-14.27, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile29.geometry}
        material={model.materials.Stone}
        position={[-14.27, 1.49, -0.02]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile11.geometry}
        material={model.materials.Derevo}
        position={[11.02, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile37.geometry}
        material={model.materials.Derevo}
        position={[-2.93, 1.49, -11.31]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile1.geometry}
        material={model.materials.Derevo}
        position={[2.65, 1.49, -11.31]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile15.geometry}
        material={model.materials.Stone}
        position={[2.55, 1.49, 5.55]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile16.geometry}
        material={model.materials.Stone}
        position={[2.55, 1.49, 8.36]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile22.geometry}
        material={model.materials.Stone}
        position={[-3.02, 1.49, 8.36]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile20.geometry}
        material={model.materials.Stone}
        position={[-3.02, 1.49, 14.13]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile34.geometry}
        material={model.materials.Stone}
        position={[-2.93, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile35.geometry}
        material={model.materials.Stone}
        position={[-2.93, 1.49, -5.62]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile3.geometry}
        material={model.materials.Stone}
        position={[2.65, 1.49, -5.62]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile2.geometry}
        material={model.materials.Stone}
        position={[2.65, 1.49, -8.43]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile8.geometry}
        material={model.materials.Stone}
        position={[13.67, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile9.geometry}
        material={model.materials.Stone}
        position={[13.67, 1.49, -0.02]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Cube056.geometry}
        material={model.materials["Black Cube"]}
        position={[-0.34, 0.6, 0]}
        scale={[16.01, 0.83, 15.83]}
      />
     
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile17.geometry}
        material={model.materials.Derevo}
        position={[2.55, 1.49, 11.25]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile31.geometry}
        material={model.materials.Derevo}
        position={[-11.4, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile7.geometry}
        material={model.materials.Derevo}
        position={[10.86, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile14.geometry}
        material={model.materials.Stone}
        position={[2.55, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile18.geometry}
        material={model.materials.Stone}
        position={[2.55, 1.49, 14.13]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile23.geometry}
        material={model.materials.Stone}
        position={[-3.02, 1.49, 5.55]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile25.geometry}
        material={model.materials.Stone}
        position={[-5.59, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile33.geometry}
        material={model.materials.Stone}
        position={[-5.75, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile36.geometry}
        material={model.materials.Stone}
        position={[-2.93, 1.49, -8.43]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile4.geometry}
        material={model.materials.Stone}
        position={[2.65, 1.49, -2.94]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile40.geometry}
        material={model.materials.Stone}
        position={[2.65, 1.49, -14.2]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile10.geometry}
        material={model.materials.Stone}
        position={[13.83, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.Tile28.geometry}
        material={model.materials.Stone}
        position={[-14.12, 1.49, 2.88]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.1, 0.05, 1]}
      />
      <group position={[9.13, 2.27, -10.47]} scale={0.81}>
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Cube077.geometry}
          material={model.materials.Derevo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Cube077_1.geometry}
          material={model.materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Cube077_2.geometry}
          material={model.materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Cube077_3.geometry}
          material={model.materials["Roof.002"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Cube077_4.geometry}
          material={model.materials["Roof.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Cube077_5.geometry}
          material={model.materials.yellow}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Cube077_6.geometry}
          material={model.materials.Sten}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Cube077_7.geometry}
          material={model.materials["Patio Stone"]}
        />
      </group>
      <group
        position={[0.13, 1.55, -0.08]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.5}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Plane026.geometry}
          material={model.materials.Gras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Plane026_1.geometry}
          material={model.materials["Lowpol Cartoon Chest"]}
        />
      </group>
      <group
        position={[-9.91, 2.27, 10.65]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.81}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle018.geometry}
          material={model.materials.Derevo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle018_1.geometry}
          material={model.materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle018_2.geometry}
          material={model.materials.Gras}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle018_3.geometry}
          material={model.materials["Material.001"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle018_4.geometry}
          material={model.materials.Sten}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle018_5.geometry}
          material={model.materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle018_6.geometry}
          material={model.materials["Patio Stone"]}
        />
      </group>
      <group position={[-10.6, 2.22, -10.65]} scale={0.9}>
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle017.geometry}
          material={model.materials.Derevo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle017_1.geometry}
          material={model.materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle017_2.geometry}
          material={model.materials.Roof}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle017_3.geometry}
          material={model.materials.Sten}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle017_4.geometry}
          material={model.materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle017_5.geometry}
          material={model.materials["Patio Stone"]}
        />
      </group>
      <group
        position={[9.79, 2.27, 10.33]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={0.81}
      >
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle021.geometry}
          material={model.materials.Derevo}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle021_1.geometry}
          material={model.materials.Stone}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle021_2.geometry}
          material={model.materials["Roof.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle021_3.geometry}
          material={model.materials["Roof.003"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle021_4.geometry}
          material={model.materials.blue}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle021_5.geometry}
          material={model.materials.Sten}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle021_6.geometry}
          material={model.materials.Metal}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={model.nodes.Circle021_7.geometry}
          material={model.materials["Patio Stone"]}
        />
      </group>
    </group>
    </>
  );
};
useGLTF.preload("/Ludo.glb");
