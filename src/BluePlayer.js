import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import gsap from "gsap";
import { Html } from "@react-three/drei";
import { switchIt } from "./switchPlayersSlice";
import { setLocation, setMotion } from "./dataSlice";
let player;
let randomNum;
const BluePlayer = (props) => {
  const playerName = 'bluePlayer';
  const [moved, setMoved] = useState();
  const state = useSelector((state) => state.data.bluePlayer);
  console.log(state);
  const dispatch = useDispatch();

  useEffect(() => {
    player = state.geti1;
    setMoved(true);
    console.log("df");
  }, [props.active]);
  let geti;
  const roll = () => {
    if (moved) {
      const diceEl = document.querySelector(".blueDice");
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
    if(props.active === 'blue') {
    console.log(e.intersections[0].object.id);
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
              playerName,
              location: i - 1,
            };
            dispatch(setLocation(data));
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
  return   <>
      <Html
        style={{
          width: "10%",
          height: "10%",
          zIndex: 1000,
          backgroundColor: "black",
          borderRadius: "15px",
          userSelect: "none",
          display: `${props.active === 'blue' ? 'block': 'none'}`
        }}
        center
        fullscreen
      >
        <img className="blueDice" src="./dice-5.png" onClick={roll} />
      </Html>
      <group onClick={(e) => changePos(e)}>
    <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.BlueGeti001.geometry}
        material={props.model.materials.blue}
        position={[7.27, 2.54, 6.09]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.BlueGeti2001.geometry}
        material={props.model.materials.blue}
        position={[8.65, 2.54, 6.09]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.BlueGeti3001.geometry}
        material={props.model.materials.blue}
        position={[10.03, 2.54, 6.09]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={props.model.nodes.BlueGeti4001.geometry}
        material={props.model.materials.blue}
        position={[11.41, 2.54, 6.09]}
        rotation={[0, Math.PI / 2, 0]}
        scale={0.69}
      />
      </group>
    </>
}
export default BluePlayer;