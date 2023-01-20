import { Html, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { reset, setLocation, setMotion } from "./dataSlice";
import { switchIt } from "./switchPlayersSlice";
import * as three from "three";
import { useFrame } from "@react-three/fiber";
let player;
let randomNum;
let value = 0;
const Yellow = (props) => {
  const playerName = props.playerName;
  const state = useSelector((state) => state.data[`${playerName}`]);
  const dispatch = useDispatch();
  const [dice, setDice] = useState(true);
  const [nextTurn, setNextTurn] = useState(false);
  const text = useRef();
  const refs = {
    YellowGeti001: useRef(),
    YellowGeti2001: useRef(),
    YellowGeti3001: useRef(),
    YellowGeti4001: useRef(),
    BlueGeti001: useRef(),
    BlueGeti2001: useRef(),
    BlueGeti3001: useRef(),
    BlueGeti4001: useRef(),
  };
  const pos = props.house;
  let length;
  pos.y = 8;
  let diceEl;
  if (props.active === "Yellow") {
    props.material.emissive = props.material.color;
    props.material.emissiveIntensity = 1;
  } else {
    props.material.emissive = props.material.color;
    props.material.emissiveIntensity = 0;
  }
  if (props.active === "Blue") {
    props.model.materials["blue"].emissive =
      props.model.materials["blue"].color;
    props.model.materials["blue"].emissiveIntensity = 1;
  } else {
    props.model.materials["blue"].emissive =
      props.model.materials["blue"].color;
    props.model.materials["blue"].emissiveIntensity = 0;
  }
  for (let locate in state) {
    if (playerName === "yellowPlayer") {
      if (state[locate].location > 0) length = true;
    }
    if (playerName === "bluePlayer") {
      if (state[locate].location > 1) length = true;
    }
  }
  useEffect(() => {
    player = state.geti1;
    setDice(true);
  }, [props.active]);
  useFrame((state) => {
    text?.current.quaternion.copy(state.camera.quaternion);
  });
  const opponent = useSelector((all) => {
    for (let players in all.data)
      if (all.data[players] !== state) return all.data[players];
  });
  const checkCollision = (player) => {
    for (let get in opponent) {
      if (
        player.location > 1 &&
        opponent[get].location > 1 &&
        player.location === opponent[get].location
      ) {
        for (let ref in refs) {
          if (refs[ref].current.name === opponent[get].name) {
            gsap.to(refs[ref].current.position, {
              x: opponent[get].startPoint.x,
              y: opponent[get].startPoint.y,
              z: opponent[get].startPoint.z,
              duration: 1,
              ease: "power1.out",
            });
            let team;
            if (opponent[get].name.includes("Blue")) {
              team = "bluePlayer";
            } else if (opponent[get].name.includes("Yellow")) {
              team = "yellowPlayer";
            }
            const playerData = {
              team,
              name: opponent[get].name,
            };
            dispatch(reset(playerData));
          }
        }
      }
    }
  };
  // useEffect(() => {
  // }, [state]);

  let geti;
  if (player?.location === 39) {
    console.log("win");
  }
  const roll = () => {
    diceEl = document.querySelector(".dice");
    randomNum = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${randomNum}.png`;
    value = randomNum;
    if (randomNum === 6) {
      dispatch(setMotion(playerName));
      setNextTurn(true);
    }
    if (randomNum !== 6 && !nextTurn && !length) {
      dispatch(switchIt());
      randomNum = 0;
    }
    setDice(false);
  };

  const changePos = (e) => {
    const get = e.intersections.filter((objects) =>
      objects.object.name.includes(`${props.active}Geti`)
    );
    for (let data in state) {
      if (state[data].name === get[0].object.name) {
        player = state[data];
      }
    }
    if (!player.moved) {
      randomNum = 1;
    }
    if (player.motion || player.moved) {
      geti = get[0].object;
      let i = 1;
      function myLoop() {
        setTimeout(function () {
          console.log(player);
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
            let name = geti.name;
            const data = {
              name: name,
              playerName,
              location: i - 1,
            };
            const temp = {
              location: (player.location + i) - 1,
              name: player.name,
            };
            dispatch(setLocation(data));
            setDice(true);
            checkCollision(temp);
            if (value !== 6) {
              setNextTurn(false);
              dispatch(switchIt());
            }
          }
        }, 300);
      }
      if (i <= randomNum) {
        myLoop();
      }
    }
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
          display: `${dice ? "block" : "none"}`,
        }}
        center
        fullscreen
      >
        <img className="dice" src="./dice-5.png" onClick={roll} />
      </Html>
      <group onClick={(e) => changePos(e)}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          visible={!dice && `${randomNum > 0}`}
          ref={text}
          fontSize={3}
          position={pos}
          color={props.textColor}
        >
          {randomNum}
        </Text>
        <mesh
          name="GreenGeti4001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.GreenGeti4001.geometry}
          material={props.model.materials.Gras}
          position={[-7.93, 2.54, 6.46]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          name="GreenGeti3001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.GreenGeti3001.geometry}
          material={props.model.materials.Gras}
          position={[-9.31, 2.54, 6.46]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          name="BlueGeti001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.BlueGeti001.geometry}
          material={props.model.materials.blue}
          position={[7.27, 2.54, 6.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          ref={refs.BlueGeti001}
        />
        <mesh
          name="YellowGeti4001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti4001.geometry}
          material={props.model.materials.yellow}
          position={[11.41, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          ref={refs.YellowGeti4001}
        />
        <mesh
          name="RedGeti001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.RedGeti001.geometry}
          material={props.model.materials.Roof}
          position={[-12.44, 2.54, -6.02]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          name="BlueGeti2001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.BlueGeti2001.geometry}
          material={props.model.materials.blue}
          position={[8.65, 2.54, 6.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          ref={refs.BlueGeti2001}
        />
        <mesh
          name="YellowGeti3001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti3001.geometry}
          material={props.model.materials.yellow}
          position={[10.03, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          ref={refs.YellowGeti3001}
        />
        <mesh
          name="RedGeti2001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.RedGeti2001.geometry}
          material={props.model.materials.Roof}
          position={[-11.05, 2.54, -6.02]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          name="GreenGeti001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.GreenGeti001.geometry}
          material={props.model.materials.Gras}
          position={[-12.07, 2.54, 6.46]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          name="BlueGeti4001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.BlueGeti4001.geometry}
          material={props.model.materials.blue}
          position={[11.41, 2.54, 6.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          ref={refs.BlueGeti4001}
        />
        <mesh
          name="YellowGeti001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti001.geometry}
          material={props.model.materials.yellow}
          position={[7.27, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          ref={refs.YellowGeti001}
        />
        <mesh
          name="RedGeti4001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.RedGeti4001.geometry}
          material={props.model.materials.Roof}
          position={[-8.29, 2.54, -6.02]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          name="GreenGeti2001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.GreenGeti2001.geometry}
          material={props.model.materials.Gras}
          position={[-10.69, 2.54, 6.46]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
        <mesh
          name="BlueGeti3001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.BlueGeti3001.geometry}
          material={props.model.materials.blue}
          position={[10.03, 2.54, 6.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          ref={refs.BlueGeti3001}
        />
        <mesh
          name="YellowGeti2001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti2001.geometry}
          material={props.model.materials.yellow}
          position={[8.65, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          ref={refs.YellowGeti2001}
        />
        <mesh
          name="RedGeti3001"
          castShadow
          receiveShadow
          geometry={props.model.nodes.RedGeti3001.geometry}
          material={props.model.materials.Roof}
          position={[-9.67, 2.54, -6.02]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
        />
      </group>
    </>
  );
};
export default Yellow;
