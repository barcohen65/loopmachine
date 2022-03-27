import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import ReplayCircleFilledSharpIcon from '@mui/icons-material/ReplayCircleFilledSharp';
import "./controls.css";

export function Controls({handlePlayClick,handleLoopClick ,handleStopClick, isLooping}) {
  return (
    <div className="home-controls">
      <button className="player-button" onClick={handlePlayClick}>
        <PlayCircleIcon size={20} />
      </button>
      <button className="player-button" onClick={handleStopClick}>
        <StopCircleIcon size={20} />
      </button>
      <button
        className={
          isLooping
            ? "player-button player-button_active"
            : "player-button"
        }
        onClick={handleLoopClick}
      >
        <ReplayCircleFilledSharpIcon size={20} />
      </button>
    </div>
  );
}
