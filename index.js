const colors = require("colors");
const { app, PORT, HOST, MODE } = require("./server");

colors.setTheme({
  modeStyle: ["green", "inverse", "bold"],
  productionStyle: ["yellow", "inverse", "bold"],
});

const server = app.listen(PORT, HOST, () => {
  console.log("ExpressJS server in:");
  if (MODE === "development") console.log("MODE:" + "development".modeStyle);
  else console.log("MODE" + "production".productionStyle);
  console.log("HOST: %s", HOST);
  console.log("PORT: %s", PORT);
});
