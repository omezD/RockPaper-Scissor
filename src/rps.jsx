import { useState } from "react";
import { getMoves } from "./helper.js";
import Card from "./Card.jsx";
import "./rps.css";

export default function RPS() {
  let [choice, setChoice] = useState("");
  let moves = ["Rock", "Paper", "Scissor"];
  let [computerChoice, setComputerChoice] = useState("Didn't play yet");
  function getResult(user, computer) {
    if (user === computer) {
      return "Draw 🤝";
    }

    if (
      (user === "rock" && computer === "scissors") ||
      (user === "scissors" && computer === "paper") ||
      (user === "paper" && computer === "rock")
    ) {
      return "You Win 🎉";
    }

    return "You Lose 😢";
  }

  let getComputerMove = (item) => {
    let computerMove = getMoves();
    setComputerChoice(computerMove);
    setChoice(getResult(item, computerMove));
  };

  return (
    <div>
      <h2>Rock Paper Scissor Game</h2>
      <div className="cardBox">
        <div>
          <h3>Computer Choice: {computerChoice}</h3>
          <h2>{choice}</h2>
        </div>
        <h3>Choose your moves</h3>
        {moves.map((item, idx) => (
          <button className="button" key={idx} onClick={() => getComputerMove(item)}>
            {" "}
            <Card name={item} />
          </button>
        ))}

        <h3>{choice}</h3>
      </div>
    </div>
  );
}
