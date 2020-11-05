const VillageState  = require("./village");
const { randomRobot, routeRobot, runRobot, goalOrientedRobot } = require("./robots");
const { mailRoute } = require("./roads");
  

runRobot(VillageState.random(), randomRobot);

runRobot(VillageState.random(), routeRobot, mailRoute);

runRobot(VillageState.random(), goalOrientedRobot, []);