import { useThree, extend, useFrame } from "@react-three/fiber";
import * as THREE from 'three'

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

export function Experience() {
  
  return<>
  <Environment preset="city"/>
  <OrbitControls  makeDefault/>
  {/* <primitive object={model.scene}/> */}
  <Model />
  </> 
}
export default Experience;
