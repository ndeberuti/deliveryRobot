const VillageState  = require("./village");
const { randomRobot, routeRobot, runRobot } = require("./robots");
const { mailRoute } = require("./roads");
  

runRobot(VillageState.random(), randomRobot);

runRobot(VillageState.random(), routeRobot, mailRoute);