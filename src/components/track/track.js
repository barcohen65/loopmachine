import React from 'react';
import VolumeUpSharpIcon from '@mui/icons-material/VolumeUpSharp';
import VolumeMuteSharpIcon from '@mui/icons-material/VolumeMuteSharp';
import "./track.css";

export function Track({onMuteClick, playerMute, index, playerObject}) {
  return (
    <>
  
      <button
        className={
          "player-mute" +
          (playerMute === true ? " player-mute-active" : "")
        }
        onClick={() => onMuteClick(index)}
      >
        {playerMute ? (
          <VolumeMuteSharpIcon size={30} />
        ) : (
          <VolumeUpSharpIcon size={30} />
        )}
      </button>

      <div className="player">
        <div className="player-sound">
          <p className="player-sound-name">{`${playerObject.getName()}`}</p>
        </div>
      </div>
    </>
  );
}
