import events from "events";

const emitter = new events.EventEmitter();

const log1 = () => {
  console.log("first function");
};
const log2 = () => {
  console.log("second function");
};

emitter.on("multiple", log1);
emitter.on("multiple", log2);

setInterval(() => {
  emitter.emit("multiple");
}, 1000);

const maxAmountOfListeners = emitter.getMaxListeners(); // по дефолту максимум 10 слушателей можно привязать на событие
console.log(maxAmountOfListeners);

// если нужно увеличить количество слушателей для события, можно использовать:
emitter.setMaxListeners(25);

// чтобы узнать для каких событий зарегистрированы прослушивания, можно использовать:

console.log(emitter.eventNames());
