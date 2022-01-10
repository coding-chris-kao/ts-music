import { ChordFactory } from "./libs/Chord";
import { NoteName } from "./libs/constant";
import { ScaleType } from "./libs/Scale";

const key: NoteName = "C";
const factory = new ChordFactory();
const chords = factory.getDiatonicSeventhChords(key, ScaleType.Minor);

for (const chord of chords) {
  console.log(chord.toString());
}
