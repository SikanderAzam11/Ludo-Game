import { Html } from "@react-three/drei";
import { useEffect, useState } from "react";
import gsap from "gsap";
import {useDispatch, useSelector } from "react-redux";
import { setLocation, setMotion } from "./dataSlice";
import { switchIt } from "./switchPlayersSlice";
let player;
let randomNum;
const Yellow = (props) => {
  const playerName = 'yellowPlayer';
  const [moved, setMoved] = useState();
  const state = useSelector((state) => state.data.yellowPlayer);
  console.log(state);
  const dispatch = useDispatch();
  useEffect(() => {
    player = state.geti1;
    setMoved(true);
    console.log("df");
  }, [props.active]);
  let geti;
  if(player?.location === 39) console.log('win');
  const roll = () => {
    console.log(moved);
    if (moved) {
      const diceEl = document.querySelector(".yellowDice");
      randomNum = Math.trunc(Math.random() * 6) + 1;
      diceEl.src = `dice-${randomNum}.png`;
      console.log(player);
      if (randomNum === 6) {
        dispatch(setMotion(playerName));
      } else {
        setMoved(false);
        dispatch(switchIt())
      }
    }
  };
  const changePos = (e) => {
    if(props.active === 'yellow') {
    for (let data in state) {
      if (state[data].id === e.intersections[0].object.id) {
        console.log(state[data]);
        player = state[data];
      }
    }
    if (!player.moved) {
      randomNum = 1;
    }
    console.log(player);
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
              playerName,
              location: i - 1,
            };
            dispatch(setLocation(data));
            setMoved(true);
            if(randomNum !== 6) dispatch(switchIt());
          }
        }, 500);
      }
      if (i <= randomNum) {
        console.log("ds");
        myLoop();
      }
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
          display: `${props.active === 'yellow' ? 'block': 'none'}`
        }}
        center
        fullscreen
      >
        <img className="yellowDice" src="./dice-5.png" onClick={roll} />
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
          disabled = {true}
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
