import { useState } from "react";
import datatypes_JS from "./datatypes_JS.mp3";

export function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  function toggleAudio() {
    const audioEl = document.getElementsByTagName("audio")[0];
    if (isPlaying) {
      audioEl.pause();
    } else {
      audioEl.play();
    }
    setIsPlaying(!isPlaying);
  }

  return (
    <div className="flex items-center space-x-2">
      <p className="text-gray-500">Listen to audio explanation:</p>
      <audio src={datatypes_JS} />
      <button
        className={`p-2 rounded-full ${
          isPlaying ? "bg-red-500" : "bg-green-500"
        } text-white hover:bg-opacity-75 transition-colors duration-300`}
        onClick={toggleAudio}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
