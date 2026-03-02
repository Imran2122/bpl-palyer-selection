import React from "react";

import SelectedCart from "./SelectedCart";
// eslint-disable-next-line no-unused-vars
const SelectedPlayer = ({ purchasedPlayer,handleRemovePlayer }) => {
  return (
    <div>
      
     {
        purchasedPlayer.map( player=><SelectedCart player={player}
        handleRemovePlayer={handleRemovePlayer}
        ></SelectedCart>)
     }
    </div>
  );
};

export default SelectedPlayer;
