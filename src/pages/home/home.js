import React, { useState, useEffect } from 'react';
import "./home.css";
import { playerArray } from "../../utilities/playersArray";
import { TracksList } from "../../components/tracksList/tracksList";
import { Controls } from "../../components/controls/controls";

export function Home() {
  const [progress, setProgress] = useState(0); // Position of the music slider
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const [playerMute, setPlayerMute] = useState(
    new Array(playerArray.length).fill(false)
  );

  const handlePlayClick = () => {
    if (isPlaying) {
      return null;
    }
    setIsPlaying(true);
    playerArray.forEach((player) => {
      player.play();
    });
  };

  const handleStopClick = () => {
    setProgress(0);
    setIsPlaying(false);
    playerArray.forEach((player) => {
      player.stop();
    });
  };

  const handleLoopClick = () => {
    setIsLooping(!isLooping);
    playerArray.forEach((player) => {
      player.loop();
    });
  };

  const handlePlayerMute = (index) => {
    const temp = [...playerMute];
    temp[index] = !temp[index];
    setPlayerMute(temp);
    playerArray[index].mute();
  };

  // Creates an interval which updates the slider progress
  useEffect(() => {
    const myInterval = setInterval(() => {
      setIsPlaying(playerArray[0].isPlaying());
      setProgress(playerArray[0].getTime());
    }, 100); 

    if (isPlaying === false) {
      clearInterval(myInterval);
    }
  }, [isPlaying]);

  return (
    <div className="home">
      <h1 className="home-header">LOOP-MACHINE</h1>
      <Controls
        isLooping={isLooping}
        handlePlayClick={handlePlayClick}
        handleStopClick={handleStopClick}
        handleLoopClick={handleLoopClick}
      />
      <div className="players">
        <input
          type="range"
          min="0"
          max="17"
          value={progress}
          className="slider"
        ></input>
        <TracksList
          playersArray={playerArray}
          playerMute={playerMute}
          onMuteClick={handlePlayerMute}
        />
      </div>
   
    </div>
  );
}
