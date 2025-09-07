import * as React from 'react';
// @ts-ignore
import * as exsurge from '../lib/exsurge/exsurge.es.js'

import * as Tone from "tone";
import Button from '@mui/material/Button';

interface props {
  text : React.ReactElement,
  color : "primary" | "secondary" | "error" | "info" | "success" | "warning" | undefined,
  audioMappings: Array<{ pitch: exsurge.GabcPitch, duration: number }>
}

// convert a number from 0-11 to a pitch string
const numberToPitch = (pitch: number, octave: number): string => {
  const pitches = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"];
  return pitches[pitch % 12] + (octave+3).toString();
}


const ChantPlayback: React.FC<props> = ({ text, color, audioMappings }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const synth = new Tone.AMSynth().toDestination();
  const playAudio = (audioMappings: Array<{ pitch: exsurge.GabcPitch, duration: number }>) => {

    if (isPlaying) {
      console.log("Already playing audio");
      synth.sync()
      synth.triggerRelease();
      return;
    }

    let i = 0;
    setIsPlaying(true);
    const now = Tone.now();
    for (const mapping of audioMappings) {
      const pitch = numberToPitch(mapping.pitch.step, mapping.pitch.octave);
      synth.triggerAttackRelease(pitch, mapping.duration, now + i * 0.6, 0.5);
      i++;
    }
    synth.triggerRelease(now + i * 0.6);
    setTimeout(() => {
      setIsPlaying(false);
      
    }, i * 600);
  };

  return (
    <Button onClick={() => playAudio(audioMappings)}  size='small' variant='contained' color={color} id='playback-button'>{text}</Button>
  );
};

export default ChantPlayback;
