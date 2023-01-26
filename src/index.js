import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import switchPlayer from "./switchPlayersSlice";
import gsap from "gsap";
import { Suspense } from "react";
const root = ReactDOM.createRoot(document.querySelector("#root"));
const rootReducer = combineReducers({
  data: dataReducer,
  switchPlay: switchPlayer,
});


const newGame = (e) => {
    gsap.to(e.target.parentElement, { y: 1000, duration: 3, ease: 'power1.out',onComplete:() => e.target.parentElement.style.display = 'none'},'+=1');
};
const store = configureStore({
  reducer: rootReducer,
})
root.render(
  <>
  <main>
    <h1 className="ludo">Ludo Game</h1>
	<button onClick={(e) => newGame(e)}>New Game</button>
</main>
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
  </>
);
