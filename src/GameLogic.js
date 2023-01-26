import { Environment, Html, Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { reset, setLocation, setMotion, setWin } from "./dataSlice";
import { switchIt, winner } from "./switchPlayersSlice";
import * as three from "three";
import { useFrame } from "@react-three/fiber";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Dice from "./Dice/Dice";
let player;
let randomNum;
let value = 0;
const hitSound = new Audio("./toing.mp3");
const tapSound = new Audio("./click.mp3");
const Game = (props) => {
  const playerName = props.playerName;
  /**
   * State
   */
  const state = useSelector((state) => state.data[`${playerName}`]);
  const dispatch = useDispatch();
  const [dice, setDice] = useState(true);
  const [nextTurn, setNextTurn] = useState(false);
  const winneerr = Object.values(state).every((geti) => geti.active === false);
  if (winneerr) dispatch(winner(playerName));
  /**
   * Refz
   */
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
    GreenGeti001: useRef(),
    GreenGeti2001: useRef(),
    GreenGeti3001: useRef(),
    GreenGeti4001: useRef(),
    RedGeti001: useRef(),
    RedGeti2001: useRef(),
    RedGeti3001: useRef(),
    RedGeti4001: useRef(),
  };
  /**
   * Variables
   */
  const pos = props.house;
  let length;
  let i;
  let j;
  pos.y = 8;
  let diceEl;
  let geti;
  /**
   * Material Check
   */
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
  if (props.active === "Green") {
    props.model.materials["Gras"].emissive =
      props.model.materials["Gras"].color;
    props.model.materials["Gras"].emissiveIntensity = 1;
  } else {
    props.model.materials["Gras"].emissive =
      props.model.materials["Gras"].color;
    props.model.materials["Gras"].emissiveIntensity = 0;
  }
  if (props.active === "Red") {
    props.model.materials["Roof"].emissive =
      props.model.materials["Roof"].color;
    props.model.materials["Roof"].emissiveIntensity = 1;
  } else {
    props.model.materials["Roof"].emissive =
      props.model.materials["Roof"].color;
    props.model.materials["Roof"].emissiveIntensity = 0;
  }
  /**
   * Motion Check
   */
  for (let locate in state) {
    if (playerName === "yellowPlayer") {
      if (state[locate].location > 0 || player?.moved) length = true;
    }
    if (playerName === "bluePlayer") {
      if (state[locate].location > 10 || player?.moved) length = true;
    }
    if (playerName === "greenPlayer") {
      if (state[locate].location > 20 || player?.moved) length = true;
    }
    if (playerName === "redPlayer") {
      if (state[locate].location > 30 || player?.moved) length = true;
    }
  }
  useEffect(() => {
    player = state.geti1;
    setDice(true);
  }, [props.active]);
  useFrame((state) => {
    //So that the text always faces the camera
    text?.current.quaternion.copy(state.camera.quaternion);
  });
  /**
   * Opponent State
   */
  const opponent = useSelector((all) => {
    let opponent = [];
    let k = 0;
    for (let players in all.data) {
      if (all.data[players] !== state) {
        (opponent[k] = all.data[players]), k++;
      }
    }
    return opponent;
  });
  /**
   * Collision Function
   */
  const checkCollision = (player) => {
    opponent.map((opponent) => {
      for (let get in opponent) {
        if (
          player.location > 0 &&
          opponent[get].location > 0 &&
          player.location === opponent[get].location &&
          !opponent[get].safe
        ) {
          console.log(player.location);
          for (let ref in refs) {
            if (refs[ref].current.name === opponent[get].name) {
              gsap.to(refs[ref].current.position, {
                x: opponent[get].startPoint.x,
                y: opponent[get].startPoint.y,
                z: opponent[get].startPoint.z,
                duration: 1,
                ease: "elastic.out",
                onStart: () => hitSound.play(),
              });
              let team;
              if (opponent[get].name.includes("Blue")) {
                team = "bluePlayer";
              } else if (opponent[get].name.includes("Yellow")) {
                team = "yellowPlayer";
              } else if (opponent[get].name.includes("Green")) {
                team = "greenPlayer";
              } else if (opponent[get].name.includes("Red")) {
                team = "redPlayer";
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
    });
  };
  /**
   * Check Winner Function
   */
  const checkWinner = (win, player, limit) => {
    if (win.location === limit) {
      for (let ref in refs) {
        if (player.name === refs[ref].current.name) {
          setTimeout(() => {
            refs[ref].current.visible = false;
            if (randomNum === 6) dispatch(switchIt());
            randomNum = 1;
          }, 1000);
          return;
        }
      }
    }
  };

  /**
   * Dice Roll Function
   */
  const roll = (num) => {
    // diceEl = document.querySelector(".dice");
    randomNum = num;
    // diceEl.src = `dice-${randomNum}.png`;
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
  /**
   * Change Position Function
   */
  const changePos = (e) => {
    tapSound.play();
    e.stopPropagation();
    const get = e.intersections.filter((objects) =>
      objects.object.name.includes(`${props.active}Geti`)
    );
    for (let data in state) {
      if (state[data].name === get[0].object.name) {
        player = state[data];
      }
    }
    let locate = player.location;
    if (!player.moved && randomNum === 6) {
      randomNum = 1;
    }
    if (player.motion || player.moved) {
      geti = get[0].object;
      i = 1;
      j = 1;
      function myLoop() {
        setTimeout(function () {
          // const tile = Number(props.model.nodes[`Tile${player.location + i}`].name.match(/\d/g).join(''))
          if (locate + i >= 41 && playerName !== "yellowPlayer") {
            locate = 0;
            j = 1;
          }
          let tilePos = props.model.nodes[`Tile${locate + j}`].position;
          gsap.to(geti.position, {
            x: tilePos.x,
            y: tilePos.y + 1,
            z: tilePos.z,
            duration: 1,
            ease: "power1.out",
          });
          i++;
          j++;
          const win = {
            player,
            playerName,
            location: locate + j - 1,
          };
          dispatch(setWin(win));
          if (playerName === "yellowPlayer") {
            checkWinner(win, player, 39);
          }
          if (playerName === "bluePlayer") {
            checkWinner(win, player, 8);
          }
          if (playerName === "greenPlayer") {
            checkWinner(win, player, 18);
          }
          if (playerName === "redPlayer") {
            checkWinner(win, player, 28);
          }
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
            dispatch(setLocation(data));
            const temp = {
              location: win.location,
              name: player.name,
            };
            dispatch(setWin(win));
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
      <Environment preset="sunset"/>
      <pointLight
        intensity={5}
        distance={10}
        color={props.textColor}
        position={props.house.position}
      />
      <Html
        style={{
          width: "100%",
          height: "10%",
          zIndex: 1000,
          backgroundColor: "black",
          borderRadius: "15px",
          userSelect: "none",
        }}
        fullscreen
      >
        <Dice roll={roll} dice={dice} color={props.textColor} />
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
          ref={refs.GreenGeti4001}
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
          ref={refs.GreenGeti3001}
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
          ref={refs.RedGeti001}
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
          ref={refs.RedGeti2001}
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
          ref={refs.GreenGeti001}
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
          ref={refs.RedGeti4001}
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
          ref={refs.GreenGeti2001}
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
          ref={refs.RedGeti3001}
        />
      </group>
    </>
  );
};
export default Game;
