import React, { useState } from "react";
import toast from "react-hot-toast";

const PlayerCart = ({
  player,
  setAvailableBalance,
  availableBalance,
  purchasedPlayer,
  setPurchasePLayer,
}) => {
  const [isSelected, setSelected] = useState(false);

  const handleSelected = (playerData) => {
    if (availableBalance < playerData.price) {
      toast("not to enough balance");
      return;
    }

    if (purchasedPlayer.length === 6) {
      toast("six player Already add");
      return;
    }
    setSelected(true);
    setAvailableBalance(availableBalance - playerData.price);

    setPurchasePLayer([...purchasedPlayer, playerData]);
  };
  // add player to purchased list

  return (
    <div key={player.id} className="card bg-base-100 w-96 shadow-sm p-4">
      <figure>
        <img
          src={player.image}
          alt={player.name}
          className="h-52 w-full object-cover rounded-xl"
        />
      </figure>

      <div className="mt-4">
        {/* Name Section */}
        <div className="flex gap-2 items-center">
          <img className="w-5" src="/assets/user 1.png" alt="" />
          <h3 className="font-bold text-lg">{player.name}</h3>
        </div>

        {/* Country & Role */}
        <div className="flex justify-between mt-4 items-center">
          <div className="flex items-center gap-1">
            <img className="w-4" src="/assets/report 1.png" alt="" />
            <p>{player.country}</p>
          </div>

          <button className="btn btn-sm btn-outline">{player.role}</button>
        </div>

        <hr className="mt-3" />

        {/* Rating */}
        <p className="mt-3 font-semibold">Rating: {player.rating}</p>

        {/* Batting & Bowling */}
        <div className="flex justify-between mt-2 text-sm">
          <p>{player.batting_style}</p>
          <p>{player.bowling_style}</p>
        </div>

        {/* Price & Button */}
        <div className="flex justify-between items-center mt-4">
          <p className="font-bold text-green-600">
            Price: ${player.price.toLocaleString()}
          </p>

          <button
            disabled={isSelected}
            onClick={() => handleSelected(player)}
            className="btn btn-success btn-sm"
          >
            {isSelected ? " selected" : " Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCart;
