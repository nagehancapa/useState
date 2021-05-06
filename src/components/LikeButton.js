import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  const clicklike = () => {
    setLiked(!liked);
  };

  return (
    <div>
      <p>
        <button onClick={clicklike}>
          {liked ? "You've liked this. Click to unlike" : "Like this"}
        </button>
      </p>
    </div>
  );
}
