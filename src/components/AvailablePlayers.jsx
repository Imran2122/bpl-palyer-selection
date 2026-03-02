import { use } from "react";
import PlayerCart from "./PlayerCart";

const AvailablePlayers = ({ fetchPlayer,setAvailableBalance,availableBalance,setPurchasePLayer,purchasedPlayer }) => {
  const playersData = use(fetchPlayer);
  console.log(playersData);
  return (
    <div className="grid grid-cols-3 gap-2 mt-10">
     {playersData.map((player) => <PlayerCart player={player}
     purchasedPlayer={purchasedPlayer}
     setPurchasePLayer={setPurchasePLayer}
     setAvailableBalance={setAvailableBalance}
     availableBalance={availableBalance}
     key={player.id}></PlayerCart>)}
    </div>
  );
};

export default AvailablePlayers;
