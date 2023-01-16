import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import { Html,Text } from "@react-three/drei";
import { switchIt } from "./switchPlayersSlice";
import { setLocation, setMotion } from "./dataSlice";
import * as three from 'three'
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
let player;
let randomNum;
let value;
let length;
const BluePlayer = (props) => {
  const playerName = "bluePlayer";
  const [moved, setMoved] = useState();
  const [dice,setDice] = useState(false);
  const [nextTurn, setNextTurn] = useState(false);
  const text = useRef()  
  let diceEl;
  const pos = props.model.nodes.BlueHouse.position;
  pos.y += 3
  const state = useSelector((state) => state.data.bluePlayer);
  console.log(state);
  if(props.active === 'blue') {
    props.model.materials['blue'].emissive = props.model.materials['blue'].color
    props.model.materials['blue'].emissiveIntensity = 1;
  } else {
    props.model.materials['blue'].emissive = props.model.materials['blue'].color
    props.model.materials['blue'].emissiveIntensity = 0;
  }
  const dispatch = useDispatch();
  for (let locate in state) {
    if (state[locate].location > 10) length = true;
  }
  useEffect(() => {
    player = state.geti1;
    setMoved(true);
    setDice(true)
  }, [props.active]);
  useFrame((state) => {
    text?.current.quaternion.copy(state.camera.quaternion)
  })
  let geti;
  const roll = () => {
    if (moved) {
      diceEl = document.querySelector(".blueDice");
      randomNum = Math.trunc(Math.random() * 6) + 1;
      diceEl.src = `dice-${randomNum}.png`;
      value = randomNum;
      if (randomNum === 6) {
        dispatch(setMotion(playerName));
        setNextTurn(true);
        setMoved(false);
      }
      if (randomNum !== 6 && !nextTurn && !length) {
        dispatch(switchIt());
        randomNum = 0
      }
      setDice(false)
    }
  };
  console.log(props);

  const changePos = (e) => {
    console.log(e.intersections[0].object.id);
    if (props.active === "blue") {
      const get = e.intersections.filter((objects) =>
        objects.object.name.includes("BlueGeti")
      );
      for (let data in state) {
        if (state[data].id === get[0].object.id) {
          console.log(state[data]);
          player = state[data];
        }
      }
      if (!player.moved) {
        randomNum = 1;
      }
      if (player.motion || player.moved) {
        geti = get[0].object;
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
                playerName,
                location: i - 1,
              };
              dispatch(setLocation(data));
              setMoved(true);
              setDice(true)
              if (value !== 6) {
                setNextTurn(false);
                dispatch(switchIt());
              }
              
            }
          }, 500);
        }
        if (i <= randomNum) {
          console.log("ds");
          myLoop();
        }
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
          display: `${props.active === 'blue' && dice ? 'block' : 'none'}`
        }}
        center
        fullscreen
      >
        <img className="blueDice" src="./dice-5.png" onClick={roll} />
      </Html>
      <Text font='./bangers-v20-latin-regular.woff' visible={!dice && `${randomNum > 0}`} ref={text} fontSize={3} position={pos} color={'blue'}>{randomNum}</Text>
      <group onClick={(e) => changePos(e)}>
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.BlueGeti001.geometry}
          material={props.model.materials.blue}
          position={[7.27, 2.54, 6.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          name="BlueGeti001"
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.BlueGeti2001.geometry}
          material={props.model.materials.blue}
          position={[8.65, 2.54, 6.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          name="BlueGeti002"
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.BlueGeti3001.geometry}
          material={props.model.materials.blue}
          position={[10.03, 2.54, 6.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          name="BlueGeti003"
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.BlueGeti4001.geometry}
          material={props.model.materials.blue}
          position={[11.41, 2.54, 6.09]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          name="BlueGeti004"
        />
      </group>
    </>
  );
};
export default BluePlayer;
