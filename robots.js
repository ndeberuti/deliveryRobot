const randomPick = require("./utils");
const { roadGraph, mailRoute } = require("./roads");
  
  function runRobot(state, robot, memory) {
    for (let turn = 0; ; turn++) {
      if (state.parcels.length == 0) {
        console.log(`Done in ${turn} turns`);
        break;
      }
      let action = robot(state, memory);
      state = state.move(action.direction);
      memory = action.memory;
      console.log(`Moved to ${action.direction}`);
    }
  }
  
  function randomRobot(state) {
    return { direction: randomPick(roadGraph[state.place]) };
  }
  
  function routeRobot(state, memory) {
    if (memory.length == 0) {
      memory = mailRoute;
    }
    return { direction: memory[0], memory: memory.slice(1) };
  }

module.exports = {
    routeRobot,
    runRobot,
    randomRobot
}