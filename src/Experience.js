import { useThree, extend, useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import {Dice} from './Dice'
import { Html, Text, Center, Effects, Text3D } from "@react-three/drei";
import {
  Mask,
  useMask,
  useGLTF,
  Bounds,
  PivotControls,
  Environment,
  OrbitControls,
  RoundedBox,
  Float,
} from "@react-three/drei";
import { Model } from "./Model";
import { useRef } from "react";
import { Debug, RigidBody, useRapier } from "@react-three/rapier";

export function Experience() {
  const dice = useRef()
  
  return<>
  <Environment preset="sunset"/>
  <color attach={'background'} args={['grey']}/>
  <OrbitControls  makeDefault/>
  {/* <primitive object={model.scene}/> */}
  <Model />
  
  {/* <Dice /> */}
  </> 
}
export default Experience;
