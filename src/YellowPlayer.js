import { Html } from "@react-three/drei";
import { RigidBody, useRapier } from "@react-three/rapier";
import { useEffect, useRef, useState } from "react";
import * as three from "three";
import gsap from "gsap";
import { connect, useDispatch, useSelector } from "react-redux";
import dataSlice, { setLocation, setMotion } from "./dataSlice";
let player;
let randomNum;
const Yellow = (props) => {
  const [moved, setMoved] = useState(false);
  const tiles = [];
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  props.model.scene.traverse((child) => {
    if (child.name.includes("Tile")) {
      tiles.push(child);
    }
  });
  useEffect(() => {
    player = state.geti1;
    setMoved(true);
    console.log("df");
  }, []);
  let geti;
  const roll = () => {
    if (moved) {
      const diceEl = document.querySelector(".dice");
      randomNum = Math.trunc(Math.random() * 6) + 1;
      diceEl.src = `dice-${randomNum}.png`;
      console.log(player);
      if (randomNum === 6) {
        dispatch(setMotion());
      } else {
        setMoved(false);
      }
    }
  };
  const changePos = (e) => {
    for (let data in state) {
      if (state[data].id === e.intersections[0].object.id) {
        console.log(state[data]);
        player = state[data];
      }
    }
    if (!player.moved) {
      randomNum = 1;
    }
    if (player.motion || player.moved) {
      geti = e.intersections[0].object;
      console.log(randomNum);

      let i = 1;
      function myLoop() {
        setTimeout(function () {
          // player.location += 1;
          const tilePos =
            props.model.nodes[`Tile${player.location + i}`].position;
          gsap.to(geti.position, {
            x: tilePos.x,
            y: tilePos.y + 1,
            z: tilePos.z,
            duration: 1,
            ease: "power1.out",
          });
          i++;
          if (i <= randomNum) {
            myLoop();
          } else {
            randomNum = 0;
            let id = geti.id;
            console.log(player.location);

            const data = {
              id: id,
              location: i - 1,
            };
            dispatch(setLocation(data));
            setMoved(true);
          }
        }, 500);
      }
      if (i <= randomNum) {
        console.log("ds");
        myLoop();
      }
    }
    // const [get] = e.intersections.filter((objects) =>
    //   objects.object.name.includes("YellowGeti")
    // );
    // if (get) {
  };
  return (
    <>
      <Html
        style={{
          width: "10%",
          height: "10%",
          zIndex: 1000,
          backgroundColor: "black",
          borderRadius: "15px",
          userSelect: "none",
        }}
        center
        fullscreen
      >
        <img className="dice" src="./dice-5.png" onClick={roll} />
      </Html>
      <group onClick={(e) => changePos(e)}>
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti001.geometry}
          material={props.model.materials.yellow}
          position={[7.27, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti2001.geometry}
          material={props.model.materials.yellow}
          position={[8.65, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti3001.geometry}
          material={props.model.materials.yellow}
          position={[10.03, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti4001.geometry}
          material={props.model.materials.yellow}
          position={[11.41, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
      </group>
    </>
  );
};
export default Yellow;
