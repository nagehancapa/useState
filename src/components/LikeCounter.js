import { useState, useEffect } from "react";

export default function LikeCounter() {
  const initial_numLikes = 0;
  const [numLikes, set_numLikes] = useState(initial_numLikes);

  const increment = () => {
    console.log("Yes, clicked! Current number of likes:", numLikes);
    set_numLikes(numLikes + 1);
  };

  const reset = () => {
    set_numLikes(initial_numLikes);
  };

  console.log("A render!");

  useEffect(() => {
    console.log("The useEffect action!");
  }, [numLikes]);

  return (
    <div>
      <p>
        This post has <b>{numLikes}</b> likes!
        <br />
        <button onClick={increment}>+</button>
        <br />
        <br />
        <button onClick={reset}>Reset</button>
      </p>
    </div>
  );
}
