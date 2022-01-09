import { ChordFactory } from "./libs/Chord";
import { NoteName, ScaleType } from "./libs/core";

const key: NoteName = "B";
const factory = new ChordFactory();
const chords = factory.getDiatonicChords(key, ScaleType.Major);

for (const chord of chords) {
  console.log(chord.toString());
}
