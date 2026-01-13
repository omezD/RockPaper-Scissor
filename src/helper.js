function getMoves(){
  let moves=['Rock', 'Paper', 'Scissor'];
  let random=Math.floor(Math.random()*3);
  return moves[random];
}

function getResult(user, computer) {
    if (user === computer) {
        return "Draw 🤝";
    }
    
    if (
        (user === "Rock" && computer === "Scissor") ||
        (user === "Scissor" && computer === "Paper") ||
        (user === "Paper" && computer === "Rock")
    ) {
        return "You Win 🎉";
    }
    else{
        return "You Lose 😢";
    }
}
export {getMoves,getResult};