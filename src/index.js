import classes from "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import { Provider } from "react-redux";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import switchPlayer from "./switchPlayersSlice";
import gsap from "gsap";
import { Suspense, useEffect } from "react";
import { useProgress } from "@react-three/drei";
import { Dice } from "./diceModel";
const root = ReactDOM.createRoot(document.querySelector("#root"));
const rootReducer = combineReducers({
  data: dataReducer,
  switchPlay: switchPlayer,
});
const Loader = () => {
  const { progress, loaded } = useProgress();
  return (
    <div className="container">
      <h2>Loading item: {loaded}</h2>
      <div className="progress">
        <div
          className="progress-bar"
          style={{ width: `${progress}%`, position: "relative" }}
        ></div>
      </div>
    </div>
  );
};
const newGame = (e) => {
  gsap.to(
    document.querySelector('.diceEle'),
    {
      height: '0%',
      duration: 3,
      ease: "power1.out",
      onComplete: () => (document.querySelector('.diceEle').style.display = "none"),
    },
    "+=1"
  );
};
const store = configureStore({
  reducer: rootReducer,
});
root.render(
  <>
    <Canvas className="diceEle">
      <Dice newGame = {newGame} />
    </Canvas>
    <Suspense fallback={<Loader />}>
      <Canvas
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [-4, 15, 50],
        }}
      >
        <Provider store={store}>
          <Experience />
        </Provider>
      </Canvas>
    </Suspense>
  </>
);
