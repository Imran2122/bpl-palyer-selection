import React from 'react';
import { RiDeleteBin5Line } from "react-icons/ri";
const SelectedCart = ({player,handleRemovePlayer}) => {
  
    return (
       <div className="flex justify-between border-2 border-gray-300 items-center shadow-md hover:shadow-xl transition duration-300 p-4 rounded-2xl mb-3 bg-white">
        {/* lest */}
        <div className="flex justify-between items-center">
             <img
          className="w-16 h-10 rounded-xl object-cover"
          src={player.image}
          alt={player.name}
        />
             <div className="ml-3">
          <h3 className="font-semibold">{player.name}</h3>
          <p className="text-sm text-gray-500">
            {player.batting_style}
          </p>
        </div>
        </div>
        {/* right */}
        <div>
         <RiDeleteBin5Line onClick={ ()=>handleRemovePlayer(player)} className="h-5 w-5 " />
        </div>
      </div>
    );
};

export default SelectedCart;
