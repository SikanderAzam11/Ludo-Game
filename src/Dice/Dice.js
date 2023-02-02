import { useEffect } from "react";
import rollADie from "roll-a-die";
import "./dice.css";
let cube;
let random;
const Dice = (props) => {
  function response(res) {
    props.roll(res[0]);
  }
  function rollDiceWithoutValues() {
    const element = document.getElementById("dice-box1");
    const options = {
      element, // element to display the animated dice in.
      numberOfDice: 1, // number of dice to use
      callback: response,
    };
    rollADie(options);
  }
  return (
    <>
      <div className="box">
        <div
          className="contain"
          style={{
            visibility: `${props.dice ? "visible" : "hidden"}`,
          }}
          onClick={rollDiceWithoutValues}
        >
          <div className="one">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={40}
              height={40}
              fill={props.color}
              viewBox="0 0 448 512"
            >
              <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zm160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM128 288c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm32 64c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM320 192c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32zm32 64c0-17.7-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32s32-14.3 32-32zM320 384c17.7 0 32-14.3 32-32s-14.3-32-32-32s-32 14.3-32 32s14.3 32 32 32z" />
            </svg>
            Roll <b style={{ color: `${props.color}` }}>The </b> Dice
          </div>
        </div>
        <div id="dice-box1"></div>
      </div>
    </>
  );
};
export default Dice;
