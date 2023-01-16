import "./style.css";
import ReactDOM from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import Experience from "./Experience.js";
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import switchPlayer from "./switchPlayersSlice";
const root = ReactDOM.createRoot(document.querySelector("#root"));
const rootReducer = combineReducers({
  data: dataReducer,
  switchPlay: switchPlayer,
});

const store = configureStore({
  reducer: rootReducer,
})
root.render(
  <>
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
