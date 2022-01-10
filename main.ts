import { ChordFactory } from "./libs/Chord";
import { NoteName } from "./libs/constant";
import { ScaleType } from "./libs/Scale";

const key: NoteName = "B";
const factory = new ChordFactory();
const chords = factory.getDiatonicChords(key, ScaleType.Major);

for (const chord of chords) {
  console.log(chord.toString());
}
