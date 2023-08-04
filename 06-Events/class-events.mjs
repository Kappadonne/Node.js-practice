import events from "events";

class Post extends events.EventEmitter {
  constructor(name, text) {
    super();
    this.name = name;
    this.text = text;
    this.likesQty = 0;

    this.on("likePost", () => {
      console.log("some1 liked ur post");
    });
  }

  like() {
    this.likesQty++;
    this.emit("likePost");
  }
}

const myPost = new Post("roflich", "text for post");

console.log(myPost.text, myPost.name, myPost.likesQty);
myPost.like();
