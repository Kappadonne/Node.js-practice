let runnig = true;

while (runnig) {
  console.log("while loop is running");
}

setTimeout(() => {
  return (runnig = false);
}, 0);
