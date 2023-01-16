import { Html,Text } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useDispatch, useSelector } from "react-redux";
import { setLocation, setMotion } from "./dataSlice";
import { switchIt } from "./switchPlayersSlice";
import * as three from "three";
import { useFrame } from "@react-three/fiber";
let player;
let randomNum;
let value = 0;
let length;
const Yellow = (props) => {
  const playerName = "yellowPlayer";
  const [moved, setMoved] = useState();
  const [dice,setDice] = useState(true);
  const [nextTurn, setNextTurn] = useState(false);
  const yellow1 = useRef();
  const text = useRef();  
  const pos = props.model.nodes.YellowHouse.position;
  pos.y += 3 
  console.log(yellow1);
  let diceEl;
  if(props.active === 'yellow') {
    props.model.materials['yellow'].emissive = props.model.materials['yellow'].color
    props.model.materials['yellow'].emissiveIntensity = 1;
  } else {
    props.model.materials['yellow'].emissive = props.model.materials['yellow'].color
    props.model.materials['yellow'].emissiveIntensity = 0;
  }
  const state = useSelector((state) => state.data.yellowPlayer);
  console.log(state);
  for (let locate in state) {
    if (state[locate].location > 0) length = true;
  }
  const dispatch = useDispatch();
  useEffect(() => {
    player = state.geti1;
    setMoved(true);
    setDice(true)
    console.log("sd");
  }, [props.active]);
  useFrame((state) => {
    text?.current.quaternion.copy(state.camera.quaternion)
  })
  let geti;
  if (player?.location === 39) console.log("win");
  const roll = () => {
    if (moved) {
      diceEl = document.querySelector(".yellowDice");
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
  const changePos = (e) => {
    console.log(e.intersections[0].object.id);
    const get = e.intersections.filter((objects) =>
      objects.object.name.includes("YellowGeti")
    );
    console.log(player, get);
    if (props.active === "yellow") {
      const checkPlayer = () => {
        for (let data in state) {
          if (state[data].id === get[0].object.id) {
            console.log(state[data]);
            return state[data];
          }
        }
      };
      player = checkPlayer();
      console.log(player);

      if (!player.moved) {
        console.log("call");

        randomNum = 1;
      }
      if (player.motion || player.moved) {
        geti = get[0].object;
        console.log("number =", randomNum);
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
    //
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
          display: `${props.active === "yellow" && dice ? "block" : "none"}`,
        }}
        center
        fullscreen
      >
        <img className="yellowDice" src="./dice-5.png" onClick={roll} />
      </Html>
      <group onClick={(e) => changePos(e)}>
        <Text font='./bangers-v20-latin-regular.woff' visible={!dice && `${randomNum > 0}`} ref={text} fontSize={3} position={pos} color={'yellow'}>{randomNum}</Text>
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti001.geometry}
          material={props.model.materials.yellow}
          position={[7.27, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          name="YellowGeti001"
          ref={yellow1}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti2001.geometry}
          material={props.model.materials.yellow}
          position={[8.65, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          name="YellowGeti002"
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti3001.geometry}
          material={props.model.materials.yellow}
          position={[10.03, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          name="YellowGeti003"
        />
        <mesh
          castShadow
          receiveShadow
          geometry={props.model.nodes.YellowGeti4001.geometry}
          material={props.model.materials.yellow}
          position={[11.41, 2.54, -6.22]}
          rotation={[0, Math.PI / 2, 0]}
          scale={0.69}
          name="YellowGeti004"
        />
      </group>
    </>
  );
};
export default Yellow;
