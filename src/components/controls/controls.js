import React from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import ReplayCircleFilledSharpIcon from '@mui/icons-material/ReplayCircleFilledSharp';
import "./controls.css";

export function Controls({handlePlayClick,handleLoopClick ,handleStopClick, isLooping}) {
  return (
    <div className="home-controls">
      <button className="player-button" onClick={handlePlayClick}>
        <PlayCircleIcon className="icon" size={50} />
      </button>
      <button className="player-button" onClick={handleStopClick}>
        <StopCircleIcon className="icon" size={50} />
      </button>
      <button
        className={
          isLooping
            ? "player-button player-button-active"
            : "player-button"
        }
        onClick={handleLoopClick}
      >
        <ReplayCircleFilledSharpIcon className="icon" size={50} />
      </button>
    </div>
  );
}
