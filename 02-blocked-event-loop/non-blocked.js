const fs = require("fs");
let runnig = true;

const setPromise = () => {
  return new Promise((resolve, reject) => setImmediate(() => resolve()));
  //если использовать без setImmediate, просто resolve() , то мы не перейдём на следующую итерацию цикла событий, а значит, до сеттаймаута дело никогда не дойдёт
  // и мы не изменим переменную running и цикл будет вечный
};

const loop = async () => {
  while (runnig) {
    console.log("while loop is running");
    await setPromise();
  }
};

setTimeout(() => {
  return (runnig = false);
}, 0);
loop();
//на первой итерации цикла событий вызывается весь синхронный код, а изменение running происходит в асинхронном коде setTimeout, до которого
//не доходит, ибо он во второй итерации ивент лупа
