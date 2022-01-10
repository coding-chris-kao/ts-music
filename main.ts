import { ChordFactory } from "./libs/Chord";
import { ScaleType } from "./libs/Scale";

const key: string = "C";
const factory = new ChordFactory();
const chords = factory.getDiatonicSeventhChords(key, ScaleType.Minor);

for (const chord of chords) {
  console.log(chord.toString());
}
