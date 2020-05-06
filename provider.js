import React from "react";
import { useDeck } from "mdx-deck";

export default (props) => {
  const state = useDeck();

  return (
    <div>
      {props.children}

      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          fontSize: 14,
          padding: "15px 30px",
          bottom: 0,
        }}
      >
        Use ← → or swipe to navigate. By{" "}
        <a href="https://twitter.com/html5cat" target="_blank">
          @html5cat
        </a>{" "}
        <a href="https://github.com/html5cat/puma-deck" target="_blank">
          (source)
        </a>
      </div>
    </div>
  );
};
