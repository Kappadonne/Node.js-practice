import events from "events";
import fs from "fs";

const emitter = new events.EventEmitter();
emitter.on("fileDone", (name) => {
  console.log(`${name} event has triggered`);
}); // i created the event that also waits for argument

fs.writeFile("./06-Events/superMegaFile", "some data", () => {
  emitter.emit("fileDone", "kekich");
});

// Создание ивента, который отработает только один раз

emitter.once("triggeredOnce", () => {
  console.log("something but only once");
});

setInterval(() => {
  emitter.emit("triggeredOnce");
}, 1000);

//удаление слушателя событий с конкретного ивента

const logName = () => {
  console.log(`asdsad}`);
};

emitter.on("loggingName", logName);

setInterval(() => {
  emitter.emit("loggingName");
}, 1000);

setTimeout(() => {
  emitter.off("loggingName", logName);
}, 3000);
