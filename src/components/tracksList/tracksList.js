import React from 'react';
import { Track } from "../track/track";

export function TracksList({playerMute, playersArray, onMuteClick}) {

  return (playersArray.map((player, index) => {
    return (
      <Track playerMute={playerMute[index]}
        onMuteClick={onMuteClick}
        index={index} 
        playerObject={player}
      />
    )
  }))
}
