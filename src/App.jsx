import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Navbar from "./components/Navbar";
import SelectedPlayer from "./components/SelectedPlayer";
import { Toaster } from "react-hot-toast";

const fetchPlayer = fetch("/player.json").then((res) => res.json());

function App() {
  const [toggle, setToggle] = useState(false);
  const [availableBalance, setAvailableBalance] = useState(900000000);
  const [purchasedPlayer, setPurchasePLayer] = useState([]);
  console.log(purchasedPlayer);
  //selected player ,setSelectedPlayer
  const handleRemovePlayer = (player) => {
    const upDateData = purchasedPlayer.filter((p) => p.id !== player.id);
    setPurchasePLayer(upDateData);
    setAvailableBalance(availableBalance + player.price);
  };

  return (
    <>
      <div className="max-w-[1200px] mx-auto">
        <Navbar availableBalance={availableBalance}></Navbar>
        <div className="flex justify-between items-center mt-2">
          <h2>
            {" "}
            {toggle
              ? "Available Player"
              : `SelectedPlayer (${purchasedPlayer.length}/6)`}
          </h2>

          <div className="flex gap-2 ">
            <button
              onClick={() => setToggle(true)}
              className={`p-3 border-2 border-gray-400 rounded-l-2xl ${toggle ? "bg-yellow-300" : ""}`}
            >
              Available
            </button>
            <button
              onClick={() => setToggle(false)}
              className={`p-3 border-2 border-gray-400 rounded-r-2xl ${toggle ? "" : "bg-yellow-300"}`}
            >
              Selected <span>({purchasedPlayer.length})</span>{" "}
            </button>
          </div>
        </div>

        {toggle ? (
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            {/* availabel player  */}
            <AvailablePlayers
              fetchPlayer={fetchPlayer}
              setPurchasePLayer={setPurchasePLayer}
              purchasedPlayer={purchasedPlayer}
              setAvailableBalance={setAvailableBalance}
              availableBalance={availableBalance}
            ></AvailablePlayers>
          </Suspense>
        ) : (
          <SelectedPlayer
            purchasedPlayer={purchasedPlayer}
            handleRemovePlayer={handleRemovePlayer}
          ></SelectedPlayer>
        )}

        {/* selected player */}
      </div>
           <Toaster />
    </>
  );
}

export default App;
