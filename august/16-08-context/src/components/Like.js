import React, { useContext } from "react";
import { productsContext } from '../App'

export default function Like() {
    const contextContent = useContext(productsContext);

  return (
    <div>
      <button onClick={contextContent.updateLike}>
        {contextContent.products[0].like ? "✓ Liked" : "Like"}
      </button>
    </div>
  );
}
