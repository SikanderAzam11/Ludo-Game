import React, { useRef } from "react";
import {
  OrbitControls,
  useGLTF,
  Environment,
  Center,
  Html,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function Dice(props) {
  const model = useGLTF("/dice.glb");
  const dice = useRef();
  useFrame(() => {
    dice.current.rotation.y += 0.02;
    dice.current.rotation.x += 0.002;
  });
  return (
    <>
      <Environment preset="sunset" />
      <Html 
      fullscreen>
        <main>
          <button onClick={(e) => props.newGame(e)}>New Game</button>
        </main>
      </Html>
      <Center>
        <group {...props} dispose={null} ref={dice}>
          <group name="Dice" scale={80.47}>
            <mesh
              name="Icosphere"
              castShadow
              receiveShadow
              geometry={model.nodes.Icosphere.geometry}
              material={model.materials["Black Cube"]}
            />
            <mesh
              name="Icosphere_1"
              castShadow
              receiveShadow
              geometry={model.nodes.Icosphere_1.geometry}
              material={model.materials["White Dots"]}
            />
          </group>
        </group>
      </Center>
    </>
  );
}

useGLTF.preload("/dice.glb");
