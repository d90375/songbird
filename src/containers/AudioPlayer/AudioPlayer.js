import React, { useEffect, useContext } from "react";
import useAudio from "./hook/useAudio";
import TimeBar from "./TimeBar";
import PlaybackButton from "./PlaybackButton";
import "./audioPlayer.scss";
import BirdsContext from "../../store/context/BirdsContext";

function AudioPlayer({ url }) {
  const [audioElement, audioProps] = useAudio(url);

  const {isStop} = useContext(BirdsContext);

  useEffect(() => {
    audioProps.togglePlaybackStatus();
  }, [isStop]);

  return (
    <div className="audio-player">
      {audioElement}
      {audioProps.isLoading ? (
        <div style={{ color: "white" }}>Loading...</div>
      ) : (
        <div className="controls">
          <PlaybackButton onClick={audioProps.togglePlaybackStatus} playbackStatus={audioProps.playbackStatus} />
          <TimeBar
            currentTime={audioProps.currentTime}
            isSeeking={audioProps.isSeeking}
            duration={audioProps.duration}
            progress={audioProps.progress}
            setTime={audioProps.setTime}
          />
        </div>
      )}
    </div>
  );
}

export default AudioPlayer;
