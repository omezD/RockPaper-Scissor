function getMoves(){
  let moves=['Rock', 'Paper', 'Scissor'];
  let random=Math.floor(Math.random()*3);
  return moves[random];
}
export {getMoves};